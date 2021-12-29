import { AddTask } from "@/components/add-task";
import { TaskList } from "@/components/task-list";
import { NextPage } from "next";

const TaskPage: NextPage = () => {
  return (
    <>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </>
  );
};

export default TaskPage;
