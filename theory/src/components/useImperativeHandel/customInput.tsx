import { useImperativeHandle, forwardRef } from "react";

// The return of this function will play the role of an element, to which this <ref> will be assigned (attached)
const funky = () => {
  return {
    alertHi: () => alert("Hi"),
  };
};

type Props = { style?: Record<string, string>; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void };

export type CustomItem = ReturnType<typeof funky>;

function CustomInput({ style, ...props }: Props, ref: React.Ref<CustomItem>) {
  useImperativeHandle(ref, funky, []);

  return (
    <input
      {...props}
      style={{
        border: "none",
        backgroundColor: "green",
        padding: ".3rem",
        borderBottom: ".1em solid black",
        borderTopRightRadius: ".25em",
        borderTopLeftRadius: ".25em",
        ...style,
      }}
    />
  );
}

/* ***************************************************************************************************** */

/*

function CustomInput<T extends { style: Record<string, string> }>({ style, ...props }: T, ref: any) {
  return (
    <input
      ref={ref}
      {...props}
      style={{
        border: "none",
        backgroundColor: "green",
        padding: ".3rem",
        borderBottom: ".1em solid black",
        borderTopRightRadius: ".25em",
        borderTopLeftRadius: ".25em",
        ...style,
      }}
    />
  );
}

*/

export default forwardRef(CustomInput);
