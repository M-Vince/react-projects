const initialGameBoard = [
  [null, "X", null],
  ["O", "null", "O"],
  [null, "X", null],
];

export default function GameBoard() {
  return (
    <>
      <ol className="flex flex-wrap flex-col justify-center gap-8 my-12 ">
        {initialGameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol className="flex flex-wrap justify-center gap-8">
              {row.map((col, colIndex) => (
                <li key={colIndex}>
                  <button className="w-32 h-32 p-4 border-none bg-[#aca788] text-[#3f3b00] text-6xl font-[--font-game-board] cursor-pointer">
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
