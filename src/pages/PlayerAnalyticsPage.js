
import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/header';
import ApexCharts from '../components/barchart';
  
  function PlayerAnalyticsPage() {
    return (
      <div className="PlayerAnalyticsPage">
        <div className="App">
          <Header /> {/* Use the Header component */}
          <h1>Player Analytics</h1>
        </div>
        <div className="App" id="outer-container">
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        </div>
        
        <ApexCharts />

      </div>
    );
  }
  
  export default PlayerAnalyticsPage;
  