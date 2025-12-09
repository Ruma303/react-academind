import { useState } from "react"

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName)
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick(e) {
    setIsEditing((editing) => !editing)
  }

  function handleChange(e) {
    setPlayerName(e.target.value)
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>

  if (isEditing) {
    editablePlayerName = <input type="text" value={playerName}
      onChange={handleChange}
      placeholder="Choose your name" required />
  }

  return (
    <li className={isActive ? 'active' : ''}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}