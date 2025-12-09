export default function Log({ turns }) {
  return <ol id="log">
    {turns && turns.map(({square, player}) => {
      return <li key={`${square.row} ${square.col}`}>
        {player} selected {square.row}, {square.col}
      </li>
    })}
  </ol>;
}