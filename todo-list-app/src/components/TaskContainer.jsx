import TaskCard from "./TaskCard";

export default function TaskContainer({
  tasks,
  clickDelete,
  clickUp,
  clickDown,
}) {

  return (
    // Wrapper
    <div className="p-2 flex flex-col w-full h-full border-2 border-green-300">
      <h1 className="text-3xl text-center"> All Tasks here</h1>

      <div className="m-2 border-2 border-black">
        {/* Todo Container */}
        <ul className="mx-2 p-4 flex flex-wrap w-full gap-2">
          {tasks.map((values, index) => (
            <TaskCard
              key={index}
              id={index}
              clickDelete={clickDelete}
              clickDown={clickDown}
              clickUp={clickUp}
            >
              <h1 className="text-xl font-semibold">{values.title}</h1>
              <p className="flex-1">{values.description}</p>
            </TaskCard>
          ))}
        </ul>
      </div>
    </div>
  );
}
