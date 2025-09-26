
import React from 'react';
import TrialCountdown from '../components/TrialCountdown';
import AiBotDemo from '../components/AiBotDemo';

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <TrialCountdown demoDays={90} />
      <AiBotDemo />
      <div className="demo-charts">
        <p>Analytics Chart Placeholder</p>
      </div>
    </div>
  );
}

export default Dashboard;
