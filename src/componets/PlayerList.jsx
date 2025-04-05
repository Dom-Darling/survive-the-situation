import React, { useState } from 'react';

const PlayerList = () => {
  const [players, setPlayers] = useState([
    { id: 1, name: 'Alice', score: 120 },
    { id: 2, name: 'Bob', score: 95 },
    { id: 3, name: 'Charlie', score: 110 },
  ]);

  const [newPlayerName, setNewPlayerName] = useState('');
  const [newPlayerScore, setNewPlayerScore] = useState('');

  const addPlayer = () => {
    if (newPlayerName.trim() && !isNaN(newPlayerScore)) {
      const newPlayer = {
        id: players.length + 1,
        name: newPlayerName,
        score: parseInt(newPlayerScore, 10),
      };
      setPlayers([...players, newPlayer]);
      setNewPlayerName('');
      setNewPlayerScore('');
    } else {
      alert('Please enter a valid name and score.');
    }
  };

  const deletePlayer = (id) => {
    setPlayers(players.filter(player => player.id !== id));
  };

  const editPlayer = (id, updatedName, updatedScore) => {
    setPlayers(players.map(player => 
      player.id === id ? { ...player, name: updatedName, score: updatedScore } : player
    ));
  };

  const sortByScore = () => {
    setPlayers([...players].sort((a, b) => b.score - a.score));
  };

  const topPlayer = players.reduce((max, player) => (player.score > max.score ? player : max), players[0]);

  return (
    <div>
      <h2>Player List</h2>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            {player.name} - Score: {player.score}
            <button onClick={() => deletePlayer(player.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: '1rem' }}>
        <input
          type="text"
          placeholder="Player Name"
          value={newPlayerName}
          onChange={(e) => setNewPlayerName(e.target.value)}
          style={{ marginRight: '0.5rem', padding: '0.5rem' }}
        />
        <input
          type="number"
          placeholder="Player Score"
          value={newPlayerScore}
          onChange={(e) => setNewPlayerScore(e.target.value)}
          style={{ marginRight: '0.5rem', padding: '0.5rem' }}
        />
        <button onClick={addPlayer}>Add Player</button>
      </div>
    </div>
  );
};

export default PlayerList;