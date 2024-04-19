// LeaderboardPage.js

import React from 'react';
import './LeaderboardPage.css';
import Sidebar from '../components/Sidebar';
import Header from '../components/header';

const leaderboardData = [
  { id: 1, name: 'Drona', score: 100 },
  { id: 2, name: 'Karn', score: 90 },
  { id: 3, name: 'Arjun', score: 80 },
  { id: 4, name: 'Bheem', score: 70 },
  // Add more players as needed
];

function LeaderboardPage() {
  return (
    <div className="LeaderboardPage">
      <div className="App">
        <Header /> {/* Use the Header component */}
      </div>
      <div className="App" id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      </div>
      <h1>Leaderboard</h1>
      <div className="leaderboard">
        
        {leaderboardData.map(player => (
          <div key={player.id} className="player">
            <h2><div className="player-id">Rank {player.id}</div></h2>
            <div className="player-name">{player.name}</div>
            <div className="player-score">{player.score}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeaderboardPage;
