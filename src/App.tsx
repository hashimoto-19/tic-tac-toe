import { useState } from "react";

// マス（ボタン）に渡すもの
type SquareProps = {
  value: string;
  onClick: () => void;
};

// マス1つ分のボタン
function Square({ value, onClick }: SquareProps) {
  return (
    <button
      className="h-24 w-24 border-2 border-slate-300 bg-white text-3xl font-semibold text-slate-800 transition hover:bg-slate-50 active:bg-slate-100"
      onClick={onClick}
    >
      {value}
    </button>
  );
}

// ○ か ✕ が置いてあるか
function isMark(value: string) {
  return value === "○" || value === "✕";
}

export default function Board() {
  const [square1, setSquare1] = useState("1");
  const [square2, setSquare2] = useState("2");
  const [square3, setSquare3] = useState("3");
  const [square4, setSquare4] = useState("4");
  const [square5, setSquare5] = useState("5");
  const [square6, setSquare6] = useState("6");
  const [square7, setSquare7] = useState("7");
  const [square8, setSquare8] = useState("8");
  const [square9, setSquare9] = useState("9");
  // true = 一人目（○）の番、false = 二人目（✕）の番
  const [isOTurn, setIsOTurn] = useState(true);

  // 押したら ○ か ✕ を置いて、次の人の番にする
  function handleClick1() {
    // すでに置いてあるマスは何もしない
    if (isMark(square1)) {
      // 処理を止める
      return;
    }
    if (isOTurn) {
      setSquare1("○");
      setIsOTurn(false);
    } else {
      setSquare1("✕");
      setIsOTurn(true);
    }
    
  }
  function handleClick2() {
    if (isMark(square2)) {
      return;
    }
    if (isOTurn) {
      setSquare2("○");
      setIsOTurn(false);
    } else {
      setSquare2("✕");
      setIsOTurn(true);
    }
  }
  function handleClick3() {
    if (isMark(square3)) {
      return;
    }
    if (isOTurn) {
      setSquare3("○");
      setIsOTurn(false);
    } else {
      setSquare3("✕");
      setIsOTurn(true);
    }
  }
  function handleClick4() {
    if (isMark(square4)) {
      return;
    }
    if (isOTurn) {
      setSquare4("○");
      setIsOTurn(false);
    } else {
      setSquare4("✕");
      setIsOTurn(true);
    }
  }
  function handleClick5() {
    if (isMark(square5)) {
      return;
    }
    if (isOTurn) {
      setSquare5("○");
      setIsOTurn(false);
    } else {
      setSquare5("✕");
      setIsOTurn(true);
    }
  }
  function handleClick6() {
    if (isMark(square6)) {
      return;
    }
    if (isOTurn) {
      setSquare6("○");
      setIsOTurn(false);
    } else {
      setSquare6("✕");
      setIsOTurn(true);
    }
  }
  function handleClick7() {
    if (isMark(square7)) {
      return;
    }
    if (isOTurn) {
      setSquare7("○");
      setIsOTurn(false);
    } else {
      setSquare7("✕");
      setIsOTurn(true);
    }
  }
  function handleClick8() {
    if (isMark(square8)) {
      return;
    }
    if (isOTurn) {
      setSquare8("○");
      setIsOTurn(false);
    } else {
      setSquare8("✕");
      setIsOTurn(true);
    }
  }
  function handleClick9() {
    if (isMark(square9)) {
      return;
    }
    if (isOTurn) {
      setSquare9("○");
      setIsOTurn(false);
    } else {
      setSquare9("✕");
      setIsOTurn(true);
    }
  }
  // この3マスが揃ったら勝ち
  const lines = [
    [square1, square2, square3], // 横
    [square4, square5, square6],
    [square7, square8, square9],
    [square1, square4, square7], // 縦
    [square2, square5, square8],
    [square3, square6, square9],
    [square1, square5, square9], // 斜め
    [square3, square5, square7],
  ]

  let winner = null
  for (const [a, b, c] of lines) {
    if (a === b && b === c && isMark(a)) {
      winner = a
      break
    }
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="board w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
        <h1 className="mb-4 text-center text-2xl font-bold text-slate-800">
          三目並べ
        </h1>

        <div className="mx-auto w-fit overflow-hidden rounded-xl border-2 border-slate-400">
          <div className="flex">
            <Square value={square1} onClick={handleClick1} />
            <Square value={square2} onClick={handleClick2} />
            <Square value={square3} onClick={handleClick3} />
          </div>
          <div className="flex">
            <Square value={square4} onClick={handleClick4} />
            <Square value={square5} onClick={handleClick5} />
            <Square value={square6} onClick={handleClick6} />
          </div>
          <div className="flex">
            <Square value={square7} onClick={handleClick7} />
            <Square value={square8} onClick={handleClick8} />
            <Square value={square9} onClick={handleClick9} />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            className="rounded-lg bg-slate-800 px-4 py-2 text-sm text-white hover:bg-slate-700"
            onClick={() => {
              setSquare1("1");
              setSquare2("2");
              setSquare3("3");
              setSquare4("4");
              setSquare5("5");
              setSquare6("6");
              setSquare7("7");
              setSquare8("8");
              setSquare9("9");
            }}
          >
            リセット
          </button>
          <button
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50"
            onClick={() => setIsOTurn(true)}
          >
            ○の番にできる
          </button>
          <button
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50"
            onClick={() => setIsOTurn(false)}
          >
            ✕の番にできる
          </button>
        </div>

        {winner && (
          <p className="mt-4 text-center text-lg font-semibold text-emerald-600">
            {winner}の勝ちです！
          </p>
        )}
      </div>
    </div>
  );
}
