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
  const [square1, setSquare1] = useState('1')
  const [square2, setSquare2] = useState('2')
  const [square3, setSquare3] = useState('3')
  const [square4, setSquare4] = useState('4')
  const [square5, setSquare5] = useState('5')
  const [square6, setSquare6] = useState('6')
  const [square7, setSquare7] = useState('7')
  const [square8, setSquare8] = useState('8')
  const [square9, setSquare9] = useState('9')
  // true = 一人目（○）の番、false = 二人目（✕）の番
  const [isOTurn, setIsOTurn] = useState(true)

  // 押したら ○ か ✕ を置いて、次の人の番にする
  function handleClick1() {
    // すでに置いてあるマスは何もしない
    if (square1 === '○' || square1 === '✕') {
      // 処理を止める
      return
    }
    if (isOTurn) {
      setSquare1('○')
    } else {
      setSquare1('✕')
    }
    // 次の人の番にする
    setIsOTurn(!isOTurn)
  }
  function handleClick2() {
    if (square2 === '○' || square2 === '✕') {
      return
    }
    if (isOTurn) {
      setSquare2('○')
    } else {
      setSquare2('✕')
    }
    setIsOTurn(!isOTurn)
  }
  function handleClick3() {
    if (square3 === '○' || square3 === '✕') {
      return
    }
    if (isOTurn) {
      setSquare3('○')
    } else {
      setSquare3('✕')
    }
    setIsOTurn(!isOTurn)
  }
  function handleClick4() {
    if (square4 === '○' || square4 === '✕') {
      return
    }
    if (isOTurn) {
      setSquare4('○')
    } else {
      setSquare4('✕')
    }
    setIsOTurn(!isOTurn)
  }
  function handleClick5() {
    if (square5 === '○' || square5 === '✕') {
      return
    }
    if (isOTurn) {
      setSquare5('○')
    } else {
      setSquare5('✕')
    }
    setIsOTurn(!isOTurn)
  }
  function handleClick6() {
    if (square6 === '○' || square6 === '✕') {
      return
    }
    if (isOTurn) {
      setSquare6('○')
    } else {
      setSquare6('✕')
    }
    setIsOTurn(!isOTurn)
  }
  function handleClick7() {
    if (square7 === '○' || square7 === '✕') {
      return
    }
    if (isOTurn) {
      setSquare7('○')
    } else {
      setSquare7('✕')
    }
    setIsOTurn(!isOTurn)
  }
  function handleClick8() {
    if (square8 === '○' || square8 === '✕') {
      return
    }
    if (isOTurn) {
      setSquare8('○')
    } else {
      setSquare8('✕')
    }
    setIsOTurn(!isOTurn)
  }
  function handleClick9() {
    if (square9 === '○' || square9 === '✕') {
      return
    }
    if (isOTurn) {
      setSquare9('○')
    } else {
      setSquare9('✕')
    }
    setIsOTurn(!isOTurn)
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
