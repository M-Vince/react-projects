import React from "react";
import { useState } from "react";
import Player from "./component/Player";
import GameBoard from "./component/GameBoard";
import Log from "./component/Log";
import GameOver from "./component/GameOver";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const INITIAL_GAME_BOARD = [
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

function findWinningCombinations(gameBoard, players) { 
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
      // Get player name state that by its symbol
      winner = players[firstSquareSymbol];
    }

    // console.log('Combination 0: ', combination[0].row, combination[0].column);
    // console.log('Combination 1: ', combination[1].row, combination[1].column);
    // console.log(combination);
    // console.log('Combination[0]' , gameBoard[combination[0].row][combination[0].column])
    // console.log('Combination[1]' , gameBoard[combination[1].row][combination[1].column])
    // console.log('Combination[2]' , gameBoard[combination[2].row][combination[2].column])
    // console.log('--------------')
  }

  return winner;
}

function App() {
  const [players, setPlayers] = useState({
    'X': 'Player 1', 
    'O': 'Player 2' 
  });
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState("X");

  // Track board state of play
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];

  for (const turn of gameTurns) {
    // Object destructuring
    const { square, player } = turn;
    const { row, col } = square;

    // gameBoard[ square.row ][ square.col ] = player;
    gameBoard[row][col] = player;
  }
  console.log('Created:',gameBoard);

  // To display winner in game board
  let winner = findWinningCombinations(gameBoard, players);

  // Track current player
  const activePlayer = deriveActivePlayer(gameTurns);
  
  // Check if gameTurns have all boxes and no winner is announced
  let hasDraw = gameTurns.length === 9 && !winner;
  
  const handlePlayerSwitch = (rowIndex, colIndex) => {
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

  const handleNewPlayerName = ( symbol, newName ) => {
    setPlayers(prevPlayers => {
      return {
        // Copy the other unaffected name and assign the new name
        // based from its symbol
        ...prevPlayers,
        [symbol]: newName, 
      }
    });
    console.log('New players: ', players );
  }

  return (
    <main>
      {/* Game Container */}
      <div className="max-w-180 mx-auto my-12 p-8 rounded-md bg-gray-600 shadow-[0 0 20px rgba(0, 0, 0, 0.5)] relative">
        {/* Players */}
        <ol className="my-4 flex justify-center items-center gap-8">
          <Player playerName={players.X} symbol="X" isActive={activePlayer} onChangeName={handleNewPlayerName} />
          <Player playerName={players.O} symbol="O" isActive={activePlayer} onChangeName={handleNewPlayerName} />
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
