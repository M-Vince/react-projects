import { useState } from "react";

const initialGameBoard = [
  //   [null, "X", null],
  //   ["O", "null", "O"],
  //   [null, "X", null],

  //   [null, 'x', null],
  //   [null, null, null],
  //   [null, null, null],

  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, playerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectedSquare(rIndx, cIndx) {
    // const newBoard = [...gameBoard];
    // newBoard[rIndx] = [...gameBoard[rIndx]];
    // newBoard[rIndx][cIndx] = symbol;
    // setGameBoard(newBoard);

    // const newBoard = [...gameBoard.map(innerArray => {
    //     console.log('innerArray:' + innerArray)
    //     return [...innerArray]
    // })];
    // const newBoard = [...gameBoard];
    // console.log('NewBoard:' + newBoard);

    setGameBoard((prevBoard) => {
      const updatedBoard = [...prevBoard.map((innerArray) => [...innerArray])];
      updatedBoard[rIndx][cIndx] = playerSymbol;
      return updatedBoard;
    });

    onSelectSquare();
  }

  return (
    <>
      <ol className="flex flex-wrap flex-col justify-center gap-8 my-12 ">
        {gameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol className="flex flex-wrap justify-center gap-8">
              {row.map((col, colIndex) => (
                <li key={colIndex}>
                  <button
                    className="w-32 h-32 p-4 border-none bg-[#aca788] text-[#fffffd] text-6xl font-[--font-game-board] cursor-pointer"
                    onClick={() =>
                      handleSelectedSquare(rowIndex, colIndex)
                    }
                  >
                    {col}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
}
