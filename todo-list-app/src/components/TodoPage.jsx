import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import AddTaskModal from "./AddTaskModal";
import TaskContainer from "./TaskContainer";

export default function TodoPage() {
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  // Add task from Modal values to ToDoContainer
  const addTask = (modalTask) => {
    // Update tasks or add one
    const tempTask = {
      title: modalTask.title,
      description: modalTask.description,
    };

    setTasks((prev) => [...prev, tempTask]);
    console.log("New tasks created:", tasks);
    setOpen(false);
  };

  function deleteTask(selectIndex) {
    console.log("Selected Index:" + selectIndex);
    // The '_' is used as common practice where it is ignored and only uses 2nd parameter
    const newTaskList = tasks.filter((_, index) => index !== selectIndex);
    setTasks(newTaskList);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const arrangeTodo = [...tasks];
      console.log(arrangeTodo);
      // Array Destructuring: Swapping two variables
      [arrangeTodo[index], arrangeTodo[index - 1]] = [
        arrangeTodo[index - 1],
        arrangeTodo[index],
      ];
      setTasks(arrangeTodo);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const arrangeTodo = [...tasks];
      // Array Destructuring: Swapping two variables
      [arrangeTodo[index], arrangeTodo[index + 1]] = [
        arrangeTodo[index + 1],
        arrangeTodo[index],
      ];
      setTasks(arrangeTodo);
    }
  }

  return (
    <>
      <div className="font-roboto flex">
        <Sidebar />   
        <div className="flex flex-col w-screen">
          {/* Button to add task is in Navbar */}
          <Navbar onOpenModal={openModal} />
          {/* <ToDoContainer tasks={tasks}/> */}
          <TaskContainer
            tasks={tasks}
            clickDelete={deleteTask}
            clickDown={moveTaskDown} 
            clickUp={moveTaskUp}
          />
        </div>
      </div>
      <AddTaskModal
        isOpen={open}
        onCloseModal={closeModal}
        onAddTask={addTask}
      />
    </>
  );
}
