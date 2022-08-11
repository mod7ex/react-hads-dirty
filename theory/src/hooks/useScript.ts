import useAsync from "./useAsync";

// https://stackoverflow.com/questions/44506207/reactjs-lifecycle-method-inside-a-function-component

export default function useScript(url: string) {
  return useAsync(() => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;

    return new Promise((resolve, reject) => {
      script.addEventListener("load", resolve);
      script.addEventListener("error", reject);
      document.body.appendChild(script);
    });
  }, [url]);
}
