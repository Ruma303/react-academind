import { useState } from "react"

export default function Player({ name, symbol, children }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick(e) {
    setIsEditing((editing) => !editing)
  }

  let playerName = <span className="player-name">{name}</span>

  if (isEditing) {
    playerName = <input type="text" value={name}
      placeholder="Choose your name" required />
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}