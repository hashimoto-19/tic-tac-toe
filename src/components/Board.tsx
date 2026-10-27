import type { Squares } from '../types'

// Board は「見せるだけ」。更新の中身は知らない
// Board が親（App）から受け取るものの型
type Props = {
  // いまの盤面（9マスの配列）
  squares: Squares
  // マスが押されたとき呼ぶ関数
  // index: 押されたマスの番号（0〜8）
  // void: この関数は戻り値を返さない
  onSquareClick: (index: number) => void
}

function Board({ squares, onSquareClick }: Props) {
  return (
    <div className="grid w-48 grid-cols-3 gap-2">
      {squares.map((value, index) => (
        <button
          key={index}
          type="button"
          className="h-16 border border-black text-2xl"
          onClick={() => onSquareClick(index)}
        >
          {value}
        </button>
      ))}
    </div>
  )
}

export default Board
