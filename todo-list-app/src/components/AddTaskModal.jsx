import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function AddTaskModal({ isOpen, onCloseModal, onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = () => {
    const newTask = {
      title,
      description,
    };

    // Delivers values to App.jsx
    ( title !== '' && description !== '' ) && onAddTask(newTask);

    // Reset values
    setTitle("");
    setDescription("");
  };

  return (
    <>
      {/* backdrop */}
      <div
        className={`h-screen fixed inset-0 z-1000 flex justify-center items-center
            ${isOpen ? "visible bg-black/30" : "invisible"}
        `}
      >
        {/* modal*/}
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-xl p-6"
        >
          {/* modal container */}
          <div className="w-90 flex flex-col p-2">
            {/* modal header */}
            <div className="my-2 mx-2 flex justify-between items-center">
              <p className="text-2xl text-center font-bold"> Add a task </p>
              <IoMdCloseCircleOutline
                onClick={onCloseModal}
                className="cursor-pointer"
                size={30}
              />
            </div>
            {/* modal body */}
            <div className="my-2 mx-2 flex flex-col gap-4">
              <div className="flex flex-col">
                <span className="text-lg"> Title </span>
                {/* Set input values: Title */}
                <input
                  className="h-10 border-2 border-black"
                  type="text"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg"> Description </span>
                {/* Set input values: Description */}
                <input
                  className="h-10 border-2 border-black"
                  type="text"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
            </div>
            {/* modal footer */}
            <div className="mx-4 my-4 text-xl flex flex-row justify-between items-center">
              <button
                className="bg-[#8fc1ff] w-30 py-2 border-2 border-black cursor-pointer"
                onClick={ handleAddTask }
              >
                {" "}
                Add Task{" "}
              </button>
              <button
                className="bg-[#8fc1ff] w-30 py-2 border-2 border-black cursor-pointer"
                onClick={onCloseModal}
              >
                {" "}
                Cancel{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
