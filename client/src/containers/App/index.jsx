import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router/immutable';

import history from 'configureHistory';
import Counter from 'components/Counter';
import store from 'store';

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" component={Counter} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
