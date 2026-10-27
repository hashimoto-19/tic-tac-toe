function Board() {
  return (
    <div className="w-full h-full bg-red-500">
      <h1>Board</h1>
      <div className="grid grid-cols-3 grid-rows-3 gap-2">
      <button type="button" onClick={...}>
  {board[0] ? 'X' : 'O'}
</button>
        <button type="button" onClick={...}>
  {board[1] ? 'X' : 'O'}
</button>
        <button type="button" onClick={...}>
  {board[2] ? 'X' : 'O'}
</button>
        <button type="button" onClick={...}>
  {board[3] ? 'X' : 'O'}
</button>
        <button type="button" onClick={...}>
  {board[4] ? 'X' : 'O'}
</button>
        <button type="button" onClick={...}>
  {board[5] ? 'X' : 'O'}
</button>
        <button type="button" onClick={...}>
  {board[6] ? 'X' : 'O'}
</button>
        <button type="button" onClick={...}>
  {board[7] ? 'X' : 'O'}
</button>
        <button type="button" onClick={...}>
  {board[8] ? 'X' : 'O'}
</button>
      </div>
    </div>
  )
}

export default Board
