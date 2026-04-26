import React from "react";
import { useState } from "react";
import Player from "./component/Player";
import GameBoard from "./component/GameBoard";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  const handlePlayerSwitch = () => {
    setActivePlayer((currPlayer) => (currPlayer === "X" ? "O" : "X"));
  };

  return (
    <main>
      {/* Game Container */}
      <div className="max-w-180 mx-auto my-12 p-8 rounded-md bg-gray-600 shadow-[0 0 20px rgba(0, 0, 0, 0.5)] relative">
        {/* Players */}
        <ol className="my-4 flex justify-center items-center gap-8">
          <Player playerName="Player 1" symbol="X" isActive={activePlayer}/>
          <Player playerName="Player 2" symbol="O" isActive={activePlayer}/>
        </ol>

        {/* Game Board */}
        <GameBoard onSelectSquare={handlePlayerSwitch} playerSymbol={activePlayer} />
      </div>
    </main>
  );
}

export default App;
