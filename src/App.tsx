import { useState } from 'react'

// マス（ボタン）に渡すもの
type SquareProps = {
  value: string
  onClick: () => void
}

// マス1つ分のボタン
function Square({ value, onClick }: SquareProps) {
  return (
    <button className="h-24 w-24 border text-3xl" onClick={onClick}>
      {value}
    </button>
  )
}

export default function Board() {
  // 9マスを配列1つで覚える（0〜8番）
  const [squares, setSquares] = useState([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
  ])
  // true = 一人目（○）の番、false = 二人目（✕）の番
  const [isOTurn, setIsOTurn] = useState(true)

  // マスを押したとき（index = 何番目か。0〜8）
  function handleClick(index: number) {
    // ① 押されたマスの、今の表示を見る
    const current = squares[index]

    // ② すでに ○ か ✕ なら、何もせず終わる
    if (current === '○' || current === '✕') {
      return
    }

    // ③ 今度置くマークを決める
    let mark = '✕'
    if (isOTurn) {
      mark = '○'
    }

    // ④ 盤面のコピーを作る（いまの配列を直接変えない）
    const copy = squares.slice()
    // ⑤ 押したマスだけ、決めたマークを入れる
    copy[index] = mark
    // ⑥ 新しい盤面で画面を更新する
    setSquares(copy)

    // ⑦ 次の人の番にする
    setIsOTurn(!isOTurn)
  }

  return (
    <>
      <div className="flex">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="flex">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="flex">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
    </>
  )
}
