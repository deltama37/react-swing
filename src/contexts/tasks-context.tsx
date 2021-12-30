import { Task } from "@/types/task";
import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
  VoidFunctionComponent,
} from "react";

type Action =
  | { type: "added"; payload: { text: string } }
  | { type: "changed"; payload: { task: Task } }
  | { type: "deleted"; payload: { taskId: number } };

const tasksReducer = (tasks: Task[], action: Action) => {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: tasks.slice(-1)[0].id + 1,
          text: action.payload.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.payload.task.id) {
          return action.payload.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.payload.taskId);
    }
  }
};

const TasksContext = createContext<Task[]>([]);
export const useTasks = () => {
  return useContext(TasksContext);
};

const TasksDispatchContext = createContext<Dispatch<Action>>(() => {});
export const useTasksDispatch = () => {
  return useContext(TasksDispatchContext);
};

type Props = {
  children: ReactNode;
  initialTasks?: Task[];
};

const initialStates: Task[] = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];

export const TasksProvider: VoidFunctionComponent<Props> = ({
  children,
  initialTasks = initialStates,
}) => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
};
