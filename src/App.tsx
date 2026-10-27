import Board from './components/Board'
import type { Board as BoardType } from './types'

import { useEffect, useState } from 'react'
import './App.css'



function App() {
  const [board, setBoard] = useState<BoardType>(Array(9).fill(null))
  useEffect(() => {
    setBoard(Array(9).fill(null))
  }, [])
  return (
    <>
      <Board board={board} setBoard={setBoard} />
    </>
  )
}

export default App
