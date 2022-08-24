import { isObject } from "../helpers";
import useLocalStorage from "./useLocalStorage";
import { LANGS, LanguageDictionaryStructure } from "../i18n";
import { useState, useMemo, useCallback } from "react";
import useAsync from "./useAsync";

const recursionProxy = <T extends ObjectOfNested<string>>(subject: T, fallback: string = ""): T =>
  new Proxy(subject, {
    get(target, key: string & keyof T) {
      const nestedSubject: T[keyof T] = target[key];

      if (isObject(nestedSubject) && nestedSubject !== null) return recursionProxy(nestedSubject, fallback);

      // _ is a default fall back for that level
      return nestedSubject ?? target._ ?? fallback;
    },
  }) as T;

const recursionProxyWithObjectFallback = <T extends ObjectOfNested<string>, L extends T>(subject: L, objectFallback: T, fallback: string = ""): T =>
  new Proxy(subject, {
    get(target, key: string & keyof T) {
      const nestedSubject: T[keyof T] = target[key];
      const nestedFallbackObject = objectFallback[key] as object;

      if (isObject(nestedSubject) && nestedSubject !== null) {
        return recursionProxyWithObjectFallback(nestedSubject, nestedFallbackObject);
      }

      console.log(nestedFallbackObject);

      // _ is a default fall back for that level
      return nestedSubject ?? (isObject(nestedFallbackObject) ? recursionProxy(nestedFallbackObject) : nestedFallbackObject) ?? target._;
    },
  }) as T;

// Fix: make types for this function
const getNestedValue = <T extends object>(target: T, keys: string[]): string => {
  // @ts-ignore
  let nestedTarget = target[keys[0]];
  // @ts-ignore
  if (isObject(nestedTarget) && nestedTarget !== null) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, ...rest] = keys; // deep copy
    return getNestedValue(nestedTarget, rest);
  }

  return nestedTarget;
};

export default function useTranslate() {
  const [lang, setLang] = useLocalStorage<LANGS>("language", LANGS.ENGLISH);
  const [payload, setPayload] = useState<Partial<LanguageDictionaryStructure>>({});

  const [fallback, setFallback] = useLocalStorage<LANGS>("fallback_language", LANGS.ENGLISH);
  const [fallbackPayload, setFallbackPayload] = useState<Partial<LanguageDictionaryStructure>>({});

  useAsync(async () => {
    const l = await import(`../i18n/${lang}.json`);
    setPayload(l.default);
  }, [lang]);

  useAsync(async () => {
    const l = await import(`../i18n/${fallback}.json`);
    setFallbackPayload(l.default);
  }, [fallback]);

  // functional translation
  const translate = useCallback(
    (key: StringTreePaths<SetFallback<LanguageDictionaryStructure>>) => {
      if (!key) return "";

      return getNestedValue(payload, key.split(".")) ?? getNestedValue(fallbackPayload, key.split("."));
    },
    [payload, fallbackPayload]
  );

  // object translation
  const _$ = useMemo(() => {
    let $ln = recursionProxy(payload);
    let $fbln = recursionProxy(fallbackPayload);

    return recursionProxyWithObjectFallback($ln, $fbln, "___") as SetFallback<LanguageDictionaryStructure>;
  }, [payload, fallbackPayload]);

  return {
    language: lang,
    fallbackLanguage: fallback,
    setLanguage: setLang,
    setFallbackLanguage: setFallback,
    t: translate,
    LANGS,
    _$,
  };
}
