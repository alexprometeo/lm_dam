import { useState } from 'react';

import { Square } from './components/Square';
import { WinnerModal } from './components/WinnerModal';

import confetti from 'canvas-confetti'

const TURNS = {
  X: "X",
  O: "O"
}

const WINNER_COMBO = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

// TODO: Implementar lógica de "lanzar" moneda con un random (X valores negativos y O valores positivos)

function App() {
  const [board, setBoard] = useState(() => {
    const boardLocalStorage = JSON.parse(window.localStorage.getItem('board'));
    return boardLocalStorage ? boardLocalStorage : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnLocalStorage = window.localStorage.getItem('turn');
    return turnLocalStorage ? turnLocalStorage : TURNS.X
  });

  const [winner, setWinner] = useState(null);

  console.log("Render del componente app");

  const updateBoard = (index) => {
    // Añadimos el winner en la condición para que no permita más movimientos
    if (board[index] !== null || winner) return

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newWinner = checkWinner(newBoard);

    if (newWinner) {
       confetti();
       setWinner(newWinner);
    } 
    else if (checkEndGame(newBoard)) {
      setWinner(false);
    }

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    window.localStorage.setItem('turn', newTurn);
    window.localStorage.setItem('board', JSON.stringify(newBoard));
  }

  const checkWinner = (boardToCheck) => {
    for(const combo of WINNER_COMBO) {
      const [a, b, c] = combo;
      if (boardToCheck[a] &&
          boardToCheck[a] === boardToCheck[b] &&
          boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }

    return null;
  }

  const checkEndGame = (boardToCheck) => {
    // Comprobamos que cada una de las posiciones de nuestro
    // array del tablero, tienen valor
    return boardToCheck.every((square) => square !== null);
  }

  // Función para reiniciar el juego. Se consigue dejando con valores iniciales para el tablero y el turno
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);

    //Si se añaden más estados hay que tenerlos en cuenta si hacemos un reinicio con sus valores por defecto
    setWinner(null);

    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn');
  }

  return (
    <main className='board'>
        <h1>Tic-tac-toe</h1>
        <button onClick={resetGame}>Reiniciar juego</button>
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
          <Square isSelected={turn === TURNS.O}><span><h4>{TURNS.O}</h4></span></Square>
        </section>

        <WinnerModal winner={winner} resetGame={resetGame}/>
    </main>
  )
}

export default App
