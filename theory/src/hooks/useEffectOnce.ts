import { useEffect, EffectCallback } from "react";

export default function useEffectOnce(effect: EffectCallback) {
  useEffect(effect, []);
}
