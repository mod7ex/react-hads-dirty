declare global {
  type FunctionArgs<T extends Function> = T extends (...args: infer A) => any ? A : never;

  type TodoType = Todo["content"];

  interface FormProps {
    todo: TodoType;
    setTodo: React.Dispatch<React.SetStateAction<TodoType>>;
    handleAdd: (e: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>) => void;
  }

  interface Todo {
    id: string;
    content: string | number;
    is_done?: boolean;
  }

  /*
    interface Window {
        config: {
        url: string;
        };
    }
*/
}

// Adding this exports the declaration file which Typescript/CRA can now pickup:
export {};
