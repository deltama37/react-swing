import { Task } from "@/types/task";
import { useReducer, useState } from "react";
import tasksReducer from "../reducers/tasks-reducer";
import { NextPage } from "next";
import AddTask from "@/components/add-task";
import TaskList from "@/components/task-list";

const TaskPage: NextPage = () => {
  const initialTasks: Task[] = [
    { id: 0, text: "Philosopher’s Path", done: true },
    { id: 1, text: "Visit the temple", done: false },
    { id: 2, text: "Drink matcha", done: false },
  ];
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  const [nextId, setNextId] = useState(3);

  const handleAddTask = (text: string) => {
    dispatch({
      type: "added",
      id: nextId,
      text,
    });
    setNextId(nextId + 1);
  };

  const handleChangeTask = (task: Task) => {
    dispatch({
      type: "changed",
      task,
    });
  };

  const handleDeleteTask = (taskId: number) => {
    dispatch({
      type: "deleted",
      taskId,
    });
  };

  return (
    <>
      <h1>Day off in Kyoto</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
};

export default TaskPage;
