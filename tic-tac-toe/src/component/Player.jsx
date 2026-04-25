import React from "react";

export default function Player({playerName, symbol}) {
  return (
    <li className="flex items-center w-[50%] border-2 border-solid border-transparent">
      <span className="border-2 border-solid border-transparent p-2 rounded-sm font-bold">
        <span className="inline-block w-40 text-xl text-[#e1dec7] uppercase m-0 p-2 rounded-sm text-ellipsis text-center">
          {playerName}
        </span>
        <span className="ml-4 text-xl text-[#e1dec7]">
            {symbol}
        </span>
      </span>

      <button className="w-12 border-none bg-none text-[#c3ba78] text-sm cursor-pointer transition-colors duration-200 px-1 pt-2 pb-2 hover:text-[#f8ca31]"> Edit </button>
    </li>
  );
}
