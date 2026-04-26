import React from "react";
import { useState } from "react";

export default function Player({ playerName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [changeName, setChangeName] = useState(playerName);

  const handleEditButton = () => {
    // setIsEditing(!isEditing);
    setIsEditing(editing => !editing);
  }

  return (
    <li className="flex items-center w-[50%] border-2 border-solid border-transparent">
      <span className="border-2 border-solid border-transparent p-2 rounded-sm font-bold">
        {
          // If true, display edit mode . If false, display player's name. 
          isEditing ?
          <>
            <span>
              <input
                className="w-40 p-2 bg-[#46432f] text-[#e1dec7] text-lg text-center uppercase border-none animate-pulse"
                type="text"
                onChange={(e) => {
                  setChangeName(e.target.value);
                }}
              />
            </span>
          </>
          :
          <>
            <span className="inline-block w-40 text-xl text-[#e1dec7] uppercase m-0 p-2 rounded-sm text-ellipsis text-center">
              {changeName}
            </span>
          </>
        }
        <span className="ml-4 text-xl text-[#e1dec7]">{symbol}</span>
        
      </span>

      <button
        className="w-12 border-none bg-none text-[#c3ba78] text-sm cursor-pointer transition-colors duration-200 px-1 pt-2 pb-2 hover:text-[#f8ca31]"
        onClick={handleEditButton}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
