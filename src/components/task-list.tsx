import { TaskDetail } from "@/components/task-detail";
import { useTasks } from "@/contexts/tasks-context";
import { FunctionComponent } from "react";

export const TaskList: FunctionComponent = () => {
  const tasks = useTasks();

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskDetail task={task} />
        </li>
      ))}
    </ul>
  );
};
