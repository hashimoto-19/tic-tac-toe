// プレイヤーは X か O のどちらか
export type Player = 'X' | 'O'

// 1マスの中身。空のときは null
export type SquareValue = Player | null

// 盤面はマスが 9 個並んだ配列
// 位置: 0 1 2 / 3 4 5 / 6 7 8
export type Squares = SquareValue[]
