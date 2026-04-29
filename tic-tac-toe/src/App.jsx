import React from "react";
import { useState } from "react";
import Player from "./component/Player";
import GameBoard from "./component/GameBoard";
import Log from "./component/Log";
import GameOver from "./component/GameOver";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState("X");

  // Track board state of play
  let gameBoard = [...initialGameBoard.map(array => [...array])];

  for (const turn of gameTurns) {
    // Object destructuring
    const { square, player } = turn;
    const { row, col } = square;

    // gameBoard[ square.row ][ square.col ] = player;
    gameBoard[row][col] = player;
  }
  console.log('Created:',gameBoard);
  
  // To display winner in game board
  let winner;

  // Trace winning patterns from game board
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    // Check if it is truthy, then compare 3 variables if they have the same symbol,
    // then display the winner
    if ((firstSquareSymbol) && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      console.log('Winner!')
      // Store which symbol (player) won 
      winner = firstSquareSymbol;
    }

    // console.log('Combination 0: ', combination[0].row, combination[0].column);
    // console.log('Combination 1: ', combination[1].row, combination[1].column);
    // console.log(combination);
    console.log('Combination[0]' , gameBoard[combination[0].row][combination[0].column])
    console.log('Combination[1]' , gameBoard[combination[1].row][combination[1].column])
    console.log('Combination[2]' , gameBoard[combination[2].row][combination[2].column])
    console.log('--------------')
  }

  // Check if gameTurns have all boxes and no winner is announced
  let hasDraw = gameTurns.length === 9 && !winner;

  // Track current player
  const activePlayer = deriveActivePlayer(gameTurns);

  const handlePlayerSwitch = (rowIndex, colIndex) => {
    // setActivePlayer((currPlayer) => (currPlayer === "X" ? "O" : "X"));

    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  };
  // console.log(gameTurns)

  const handleRestart = () => {
    setGameTurns([])
  }

  return (
    <main>
      {/* Game Container */}
      <div className="max-w-180 mx-auto my-12 p-8 rounded-md bg-gray-600 shadow-[0 0 20px rgba(0, 0, 0, 0.5)] relative">
        {/* Players */}
        <ol className="my-4 flex justify-center items-center gap-8">
          <Player playerName="Player 1" symbol="X" isActive={activePlayer} />
          <Player playerName="Player 2" symbol="O" isActive={activePlayer} />
        </ol>

        {/* Game Board */}
        { (winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} /> }
        <GameBoard onSelectSquare={handlePlayerSwitch} board={gameBoard} />
      </div> 
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
