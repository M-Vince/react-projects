import React from "react";

export default function Log({ gameTurns }) {
  return (
    <ol className="max-w-[20rem] my-8 mx-auto text-[#3f3b00] text-center">
      {gameTurns.map((turn) => (
        <li
          key={`${turn.square.row}${turn.square.col}`}
          className="rounded-sm m-3 animate-log"
        >
          {turn.player === "X" ? "Player 1 " : "Player 2 "}
          selected
          {` ${turn.square.row}`},{` ${turn.square.col}`}
        </li>
      ))}
    </ol>
  );
}
