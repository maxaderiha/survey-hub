import { ConnectedRouter } from 'connected-react-router/immutable';
import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import history from 'configureHistory';
import { AppThemes } from 'common/constants';
import Dashboard from 'containers/Dashboard';
import Landing from 'components/Landing';
import Header from 'containers/Header';
import store from 'store';

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className={`app-container ${AppThemes.DARK}`}>
            <Header />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/surveys" component={Dashboard} />
            </Switch>
            {/* <Footer /> */}
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
