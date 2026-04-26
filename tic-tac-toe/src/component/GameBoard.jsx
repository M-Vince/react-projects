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
                  <button>{col}</button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
}
