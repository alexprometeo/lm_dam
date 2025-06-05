import { useState } from 'react';

import { Square } from './components/Square';

const TURNS = {
  X: "X",
  O: "O"
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);

  console.log("Render del componente app");

  const updateBoard = (index) => {
    if (board[index] !== null) return

    const newBoard = [...board];
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn)
  }

  return (
    <main className='board'>
        <h1>Tic-tac-toe</h1>
        <section className='game'>
          {
            board.map((square, index) => {
                return(
                    <Square 
                      key={index} 
                      index={index} 
                      updateBoard={updateBoard}
                    >
                      {square}
                    </Square>
                )
            })
          }
        </section>

        <section className='turn'>
          <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
        </section>
    </main>
  )
}

export default App
