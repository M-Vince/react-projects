import TodoPage from "./components/TodoPage";

function App() {
  // const [open, setOpen] = useState(false);
  // const [tasks, setTasks] = useState([]);

  // const openModal = () => {
  //   setOpen(true);
  // };

  // const closeModal = () => {
  //   setOpen(false);
  // };

  // // Add task from Modal values to ToDoContainer
  // const addTask = (modalTask) => {
  //   // Update tasks or add one
  //   const tempTask = {
  //     title: modalTask.title,
  //     description: modalTask.description
  //   }

  //   setTasks((prev) => [...prev, tempTask])
  //   console.log('New tasks created:',tasks);
  //   setOpen(false);
  // }

  return (
    <>
      {/* Created ToDo Page  */}
      <TodoPage />
    </>
  );

  // MOVED TO TODO PAGE
  // <div className="font-roboto flex">
  //       <Sidebar />
  //       <div className="flex flex-col w-screen">
  //         {/* Button to add task is in Navbar */}
  //         <Navbar onOpenModal={openModal} />
  //         {/* <ToDoContainer tasks={tasks}/> */}
  //         <TaskContainer tasks={tasks} />
  //       </div>
  //     </div>
  //     <AddTaskModal isOpen={open} onCloseModal={closeModal} onAddTask={addTask} />
}

export default App;
