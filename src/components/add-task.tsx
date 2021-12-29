import { useTasksDispatch } from "@/contexts/tasks-context";
import { FunctionComponent, useState } from "react";

export const AddTask: FunctionComponent = () => {
  const tasksDispatch = useTasksDispatch();
  const [text, setText] = useState("");

  return (
    <>
      <input
        placeholder={"Add task"}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setText("");
          tasksDispatch({
            type: "added",
            payload: { text },
          });
        }}
      >
        Add
      </button>
    </>
  );
};
