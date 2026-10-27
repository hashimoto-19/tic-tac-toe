function Board() {
  return (
    <div className="w-full h-full bg-red-500">
      <h1>Board</h1>
      <div className="grid grid-cols-3 grid-rows-3 gap-2">
       <div className="text-center bg-blue-500">1</div>
       <div className="text-center bg-blue-500">2</div>
       <div className="text-center bg-blue-500">3</div>
       <div className="text-center bg-blue-500">4</div>
       <div className="text-center bg-blue-500">5</div>
       <div className="text-center bg-blue-500">6</div>
       <div className="text-center bg-blue-500">7</div>
       <div className="text-center bg-blue-500">8</div>
       <div className="text-center bg-blue-500">9</div>
      </div>
    </div>
  )
}

export default Board
