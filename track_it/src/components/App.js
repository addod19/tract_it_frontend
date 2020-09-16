import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from '../components/Auth/Login';
import Home from '../components/Home';
import About from '../components/About';

import store from '../redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="login" exact component={Login} />
        </Switch>
      </Router>
    </Provider>
    
  );
}

export default App;
