import { FunctionComponent, useState } from "react";

type Props = {
  onAddTask: Function;
};

const AddTask: FunctionComponent<Props> = ({ onAddTask }) => {
  const [text, setText] = useState("");

  return (
    <>
      <input
        placeholder={"Add task"}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        Add
      </button>
    </>
  );
};

export default AddTask;
