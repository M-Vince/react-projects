import React from "react";

export default function GameOver({ winner, onRestart }) {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-[#282617f2] animate-game-over">
      <h3 className="my-4 font-game-board text-6xl text-center text-[#fcd256]">
        Game Over!
      </h3>
      {winner ? (
        <p className="my-4 text-4xl text-center text-[#e1dec7]">
          You won, {winner}!
        </p>
      ) : (
        <p className="my-4 text-4xl text-center text-[#e1dec7]"> Draw! </p>
      )}
      <p>
        <button className="my-4 block mx-auto text-2xl bg-none border-2 border-solid border-[#fcd256] text-[#fcd256] py-2 px-4 rounded-sm cursor-pointer shadow-[0 0 8px rgba(255, 187, 0, 0.4)] hover:bg-[#fcd256] hover:text-[#3f3b00] hover:transform-[scale(1.1)] hover:shadow-[0 0 20px rgba(255, 187, 0, 0.8)] "
        onClick={onRestart}
        >
          Rematch!
        </button>
      </p>
    </div>
  );
}
