import { createContext } from "react";
import { Task } from "@/types/task";

export const TasksContext = createContext<Task[]>([]);
export const TasksDispatchContext = createContext(null);
