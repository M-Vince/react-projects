import React from "react";
import { useState } from "react";
import Player from "./component/Player";
import GameBoard from "./component/GameBoard";
import Log from "./component/Log";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState("X");

  const handlePlayerSwitch = (rowIndex, colIndex) => {
    // setActivePlayer((currPlayer) => (currPlayer === "X" ? "O" : "X"));

    setGameTurns((prevTurns) => {
      let currentPlayer = "X";

      if (gameTurns.length > 0 && gameTurns[0].player === "X") {
        currentPlayer = "O";
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  };

  return (
    <main>
      {/* Game Container */}
      <div className="max-w-180 mx-auto my-12 p-8 rounded-md bg-gray-600 shadow-[0 0 20px rgba(0, 0, 0, 0.5)] relative">
        {/* Players */}
        <ol className="my-4 flex justify-center items-center gap-8">
          <Player playerName="Player 1" symbol="X" isActive={gameTurns.player} />
          <Player playerName="Player 2" symbol="O" isActive={gameTurns.player} />
        </ol>

        {/* Game Board */}
        <GameBoard
          onSelectSquare={handlePlayerSwitch}
          turns={gameTurns}
        />
      </div>
      <Log gameTurns={gameTurns}/>      
    </main>
  );
}

export default App;
