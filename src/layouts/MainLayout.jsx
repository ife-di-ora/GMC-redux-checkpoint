import React from "react";
import TaskList from "../components/TaskList";
import AddTask from "../components/AddTask";
import TaskAddModal from "../components/TaskAddModal";
import TaskDisplayModal from "../components/TaskDisplayModal";
import CustomizedSnackbars from "../components/SnackBar";

const MainLayout = () => (
  <div className=" bg-zinc-200 max-w-2xl min-w-[50vw] p-8 space-y-4">
    <TaskList />
    <AddTask />
    <TaskDisplayModal />
    <TaskAddModal />
    <CustomizedSnackbars />
  </div>
);
export default MainLayout;
