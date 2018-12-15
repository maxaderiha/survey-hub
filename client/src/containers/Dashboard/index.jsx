import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DashboardComponent from 'components/Dashboard';
import SurveyCreationForm from 'containers/SurveyCreationForm';

class Dashboard extends React.PureComponent {
  render() {
    return (
      <div className={'dashboard-container'}>
        <Switch>
          <Route exact path="/surveys/new" component={SurveyCreationForm} />
          <DashboardComponent />
        </Switch>
      </div>
    );
  }
}

export default Dashboard;
