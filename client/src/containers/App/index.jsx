import { ConnectedRouter } from 'connected-react-router/immutable';
import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import history from 'configureHistory';
import { AppThemes } from 'common/constants';
import Landing from 'components/Landing';
import Header from 'containers/Header';
import store from 'store';

const SurveyNew = () => <div>SurveyNew</div>;
const Dashboard = () => <div>Dashboard</div>;
const Footer = () => <footer className="footer">Footer</footer>;

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className={`app-container ${AppThemes.DARK}`}>
            <Header />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/surveys" component={Dashboard} />
              <Route path="/surveys/new" component={SurveyNew} />
            </Switch>
            {/* <Footer /> */}
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
