import { useState } from "react";
import Board from "./components/Board";
import type { Squares } from "./types";

function App() {
  // ①からの盤面ができた
  const [squares, setSquares] = useState<Squares>(Array(9).fill(null));

  // マスが押されたときの処理（ここに書く）
  function handleClick(index: number) {
    // すでに埋まっているマスは無視
    if (squares[index] !== null) {
      return;
    }

    // コピーを作ってから書き換える
    const nextSquares = squares.slice();
    nextSquares[index] = "X";
    setSquares(nextSquares);
  }

  return <Board squares={squares} onSquareClick={handleClick} />;
}

export default App;
