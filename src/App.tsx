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
  // 1番・2番の表示を覚える
  const [square1, setSquare1] = useState('1')
  const [square2, setSquare2] = useState('2')
  const [square3, setSquare3] = useState('3')
  const [square4, setSquare4] = useState('4')
  const [square5, setSquare5] = useState('5')
  const [square6, setSquare6] = useState('6')
  const [square7, setSquare7] = useState('7')
  const [square8, setSquare8] = useState('8')
  const [square9, setSquare9] = useState('9')

  // 押したら ○（まる）
  function handleClick1() {
    setSquare1('○')
  }
  function handleClick2() {
    setSquare2('○')
  }
  function handleClick3() {
    setSquare3('○')
  }
  function handleClick4() {
    setSquare4('○')
  }
  function handleClick5() {
    setSquare5('○')
  }
  function handleClick6() {
    setSquare6('○')
  }
  function handleClick7() {
    setSquare7('○')
  }
  function handleClick8() {
    setSquare8('○')
  }
  function handleClick9() {
    setSquare9('○')
  }
  return (
    <>
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
    </>
  )
}
