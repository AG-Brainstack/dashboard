import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Form
      </a>
      <a className="menu-item" href="/LeaderboardPage">
        Leaderboard
      </a>
      <a className="menu-item" href="/PlayerAnalyticsPage">
        Player Analytics
      </a>
      <a className="menu-item" href="/">
        Main Page
      </a>
    </Menu>
  );
};