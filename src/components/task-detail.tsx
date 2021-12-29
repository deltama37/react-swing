import { useTasksDispatch } from "@/contexts/tasks-context";
import { Task } from "@/types/task";
import { FunctionComponent, useState } from "react";

type Props = {
  task: Task;
};

export const TaskDetail: FunctionComponent<Props> = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const tasksDispatch = useTasksDispatch();
  let taskContent: JSX.Element;

  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) =>
            tasksDispatch({
              type: "changed",
              payload: {
                task: {
                  ...task,
                  text: e.target.value,
                },
              },
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
          tasksDispatch({
            type: "changed",
            payload: { task: { ...task, done: e.target.checked } },
          });
        }}
      />
      {taskContent}
      <button
        onClick={() =>
          tasksDispatch({
            type: "deleted",
            payload: { taskId: task.id },
          })
        }
      >
        Delete
      </button>
    </label>
  );
};
