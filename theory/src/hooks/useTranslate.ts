import useLocalStorage from "./useLocalStorage";
import { useState, useMemo, useCallback, useEffect } from "react";
import en from "../i18n/en.json";
// import useAsync from "./useAsync";
import { getNestedValue, recursionProxyWithFallbackObject, recursionProxy } from "../helpers";

export enum SUPPORTED_LANGS {
  ENGLISH = "en",
  FRENCH = "fr",
}

type LangDictionary = typeof en;

const FALLBACK_MESSAGE = "______EMPTY______";

export default function useTranslate() {
  const [lang, setLang] = useLocalStorage<SUPPORTED_LANGS>("language", SUPPORTED_LANGS.ENGLISH);
  const [payload, setPayload] = useState<LangDictionary>(en);

  const [fallback, setFallback] = useLocalStorage<SUPPORTED_LANGS>("fallback_language", SUPPORTED_LANGS.ENGLISH);
  const [fallbackPayload, setFallbackPayload] = useState<LangDictionary>(en);

  // three languages max will be imported adn we won't use tow of them

  useEffect(() => {
    import(`../i18n/${lang}.json`)
      .then(({ default: data }) => {
        setPayload(data);
      })
      .catch(() => {
        setPayload(en);
      });
  }, [lang]);

  useEffect(() => {
    import(`../i18n/${fallback}.json`)
      .then(({ default: data }) => {
        setFallbackPayload(data);
      })
      .catch(() => {
        setFallbackPayload(en);
      });
  }, [fallback]);

  const translate = useCallback(
    (key: StringTreePaths<SetFallback<LangDictionary>>) => {
      return getNestedValue(payload, key.split(".")) ?? getNestedValue(recursionProxy(fallbackPayload, FALLBACK_MESSAGE), key.split("."));
    },
    [payload, fallbackPayload]
  );

  const _$ = useMemo(() => {
    return recursionProxyWithFallbackObject(payload, fallbackPayload, FALLBACK_MESSAGE);
  }, [payload, fallbackPayload]);

  return {
    language: lang,
    fallbackLanguage: fallback,
    setLanguage: setLang,
    setFallbackLanguage: setFallback,
    t: translate,
    SUPPORTED_LANGS,
    _$,
  };
}
