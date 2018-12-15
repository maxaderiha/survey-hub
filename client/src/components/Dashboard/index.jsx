import React, { Component } from 'react';

import DashboardHeader from 'components/DashboardHeader';
import Divider from 'components/Divider';
import './styles.css';

class Dashboard extends Component {
  render() {
    return (
      <div className={'dashboard'}>
        <DashboardHeader />
        <Divider />
      </div>
    );
  }
}

export default Dashboard;
