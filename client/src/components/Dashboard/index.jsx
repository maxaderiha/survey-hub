import React, { Component } from 'react';

import DashboardHeader from 'components/DashboardHeader';
import Divider from 'components/Divider';
import SurveysList from 'containers/SurveysList';
import './styles.css';

class Dashboard extends Component {
  render() {
    return (
      <div className={'dashboard'}>
        <DashboardHeader />
        <Divider />
        <SurveysList />
      </div>
    );
  }
}

export default Dashboard;
