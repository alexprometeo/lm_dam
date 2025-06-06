import { Square } from "./Square";

export const WinnerModal = ({winner, resetGame}) => {
    if (winner === null) return null;

    return (
        <section className="winner">
            <div className="text">
                <h2>Ganó</h2>
                <header className="win">
                    {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                    <button onClick={resetGame}>Empezar de nuevo</button>
                </footer>
            </div>
        </section>
    )
}