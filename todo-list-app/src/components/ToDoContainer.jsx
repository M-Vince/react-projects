import { useState } from "react";
import TaskCard from "./TaskCard";

// OLD TODO CONTAINER
export default function ToDoContainer( {tasks} ) {
  const [todo, setTodo] = useState([]); // This handles arrays of todo tasks
  const [newTodo, setNewTodo] = useState(""); // This assigns new tasks to append in todo


  let newVar = "";

  function handleInput(e) {
    setNewTodo(e.target.value);
  }

  function addTask() {
    // Using spread operator, it can include by appending another value
    // by setting a bracket, use all todo array values by using spread
    // operator, then finally add the new value from newTodo.

    if (newTodo !== "") {
      setTodo([...todo, newTodo]);
      newVar = newTodo;
      setNewTodo("");
      console.log(todo);
      console.log("New Variable Mutable: " + newTodo);
      console.log(todo.length - 1);
    }
  }

  function deleteTask(selectIndex) {
    console.log("Selected Index:" + selectIndex);
    // The '_' is used as common practice where it is ignored and only uses 2nd parameter
    const newTaskList = todo.filter((_, index) => index !== selectIndex);
    setTodo(newTaskList);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const arrangeTodo = [...todo];
      console.log(arrangeTodo);
      // Array Destructuring: Swapping two variables
      [arrangeTodo[index], arrangeTodo[index - 1]] = [
        arrangeTodo[index - 1],
        arrangeTodo[index],
      ];
      setTodo(arrangeTodo);
    }
  }

  function moveTaskDown(index) {
    if (index < todo.length - 1) {
      const arrangeTodo = [...todo];
      // Array Destructuring: Swapping two variables
      [arrangeTodo[index], arrangeTodo[index + 1]] = [
        arrangeTodo[index + 1],
        arrangeTodo[index],
      ];
      setTodo(arrangeTodo);
    }
  }

  return (
    <div className="bg-slate-600 w-fit h-fit flex flex-col justify-center items-center gap-2 py-4 px-4">
      Todo List App
      <div className="flex flex-row gap-2">
        <input
          className="border-2 border-black"
          type="text"
          //   Added 'value' attribute with the 'newTodo' useState value. Its
          //   for clearing the input field after it adds new task.
          //   But it might have problems as it shows some warning messages
          //   in the Debugging Console.
          value={newTodo}
          placeholder="Add task here:"
          onChange={(e) => handleInput(e)}
        />
        <button onClick={addTask} type="button">
          Add
        </button>
      </div>
      <div className="min-w-full h-fit border-2 border-black p-4">
        <ul>
          {/* I added the 'key' attribute here where in TaskCard.jsx, it has its own
        key attribute, so I added its own custom 'key' as a prop. This is to avoid popping up warning messages in Debugging Console in Chrome.  */}
          {/* {todo.map((task, index) => (
            <TaskCard
              key={index}
              id={index}
              clickDelete={() => {
                deleteTask(index);
              }}
              clickUp={() => moveTaskUp(index)}
              clickDown={() => moveTaskDown(index)}
            >
              {task}
            </TaskCard> 
          ))} */}

          {

            tasks.map((values, index) => (
              <TaskCard
              key={index}
              id={index}
              clickDelete={() => {
                deleteTask(index);
              }}
              clickUp={() => moveTaskUp(index)}
              clickDown={() => moveTaskDown(index)}
              >
                <h1>{values.title}</h1>
                <p>{values.description}</p>

              </TaskCard>
            ))
          }

        </ul>
      </div>
    </div>
  );
}
