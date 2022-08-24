import { useState } from "react";

// https://github.com/sudodoki/copy-to-clipboard/blob/master/index.js

const copy = async (text: string, options?: any) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
};

export default function useCopyToClipBoard() {
  const [value, setValue] = useState<string>();
  const [success, setSuccess] = useState(false);

  const copyToClipBoard = async (text: string, options?: any) => {
    const result = await copy(text, options);
    if (result) setValue(text);
    setSuccess(result);
  };

  return [copyToClipBoard, { value, success }] as const;
}
