import { FunctionComponent } from "react";
import { Task } from "@/types/task";
import TaskDetail from "@/components/task-detail";

type Props = {
  tasks: Task[];
  onChangeTask: Function;
  onDeleteTask: Function;
};

const TaskList: FunctionComponent<Props> = ({
  tasks,
  onChangeTask,
  onDeleteTask,
}) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskDetail
            task={task}
            onChange={onChangeTask}
            onDelete={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
