
export default function Navbar({ onOpenModal }) {
  const dateToday = new Date().toDateString();

  return (
    <div className="bg-[#5187ed] h-20 w-full border-2 border-black px-4 flex justify-between items-center">
      <div className="">
        <input
          type="text"
          placeholder="Search task"
          className="border-2 border-black w-20 md:w-60"
        />
      </div>
      <div>
        <p className="text-2xl">{dateToday}</p>
      </div>
      <div>
        <button
          onClick={onOpenModal}
          className="bg-[#8fc1ff] w-30 h-10 border-2 border-black cursor-pointer"
        >
          {" "}
          Add new task{" "}
        </button>
      </div>
    </div>
  );
}
