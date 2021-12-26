import { Task } from "@/types/task";
import { FunctionComponent, useState } from "react";

type Props = {
  task: Task;
  onChange: Function;
  onDelete: Function;
};

const TaskDetail: FunctionComponent<Props> = ({ task, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent: JSX.Element;

  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) =>
            onChange({
              ...task,
              text: e.target.value,
            })
          }
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <label>
      <input
        type={"checkbox"}
        checked={task.done}
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {taskContent}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </label>
  );
};

export default TaskDetail;
