import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

export default function TaskCard({
  children,
  id,
  clickDelete,
  clickUp,
  clickDown,
}) {
  return (
    <>
      <li
        key={id}
        // OLD TASK CARD
        // className=" bg-emerald-600 h-20 my-2 text-xl text-white list-none flex justify-between items-center flex-wrap"

        // NEW TASK CARD
        className="bg-[#9500f0] w-75 h-60 p-4 flex flex-col flex-initial gap-4 rounded-xl"
      >
        {children}

        <div className="mt-auto pt-5 flex items-center justify-end gap-2 border-t-2 border-dashed">
          <button
            onClick={() => clickDelete(id)}
            className="px-4 border-2 border-black rounded-full bg-red-700 cursor-pointer transition-all duration-300 hover:scale-110 active:scale-155"
          >
            <RiDeleteBin6Line size={30}/>
          </button>                                                                                    
          <button className="cursor-pointer transition-all duration-200 hover:scale-110 active:scale-155" onClick={() => clickUp(id)}> <FaRegArrowAltCircleUp size={30}/> </button>
          <button className="cursor-pointer transition-all duration-200 hover:scale-110 active:scale-155" onClick={() => clickDown(id)}> <FaRegArrowAltCircleDown size={30}/> </button>
        </div>
      </li>
    </>
  );
}
