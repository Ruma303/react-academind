export default function GameOver({ winner, onRestart }) {
  return <div id="game-over">
    <h2>Game Over!</h2>
    {winner && <h3>{winner} won!</h3>}
    {!winner && <h3>It&apos;s a draw!</h3>}
    <p>
      <button onClick={() => onRestart()}>Play again</button>
    </p>
  </div>;
};