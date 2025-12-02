import { useState } from "react";

const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameboard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prev) => {
      const updatedBoard = prev.map(innerArray => [...innerArray]);
      // Aggiungere un controllo per non sovrascrivere celle già occupate
      if (updatedBoard[rowIndex][colIndex] === null) {
        updatedBoard[rowIndex][colIndex] = 'X';
      }
      return updatedBoard;
    });
  }

   return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  className="square"
                  onClick={() => handleSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}