import { MdDashboard } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <div
        className={`bg-[#2c57a6] ${isOpen ? "w-50" : "w-20"} md:w-80 transition-[width] duration-150 min-h-screen`}
      >
        {/* Sidebar Title */}
        <div className=" border-2 border-black md:p-10 p-6 text-2xl flex font-bold gap-4">
          <button
            className="md:hidden block cursor-pointer"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? <IoMdClose size={30} /> : <GiHamburgerMenu size={30} />}
          </button>
          <div
            className={`${isOpen ? "block" : "hidden"} md:block w-full text-center`}
          >
            TODO LIST APP
          </div>
        </div>

        {/* Sidebar Nav */}
        <nav className="border-2 border-black p-2 text-xl flex flex-col">
          <ul>
            <li className="p-4 flex items-center gap-4">
              <MdDashboard size={30} />
              <div className={`${isOpen ? "block" : "hidden"} md:block`}>
                Dashboard
              </div>
            </li>
            <li className="p-4 flex items-center gap-4">
              <FaRegCircleUser size={30} />
              <div className={`${isOpen ? "block" : "hidden"}  md:block`}>
                Profile
              </div>
            </li>
            <li className="p-4 flex items-center gap-4">
              <IoSettingsOutline size={30} />
              <div className={`${isOpen ? "block" : "hidden"}  md:block`}>
                Settings
              </div>
            </li>
          </ul>
        </nav>

      </div>
    </div>
  );
}
