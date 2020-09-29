import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import Signin from './auth/Login';
import Signup from './auth/Signup';
import Home from '../pages/Home';
import setAuthToken from '../helpers/setAuthToken';
import loadUser from '../redux/actions/authActions';

import {
  addWaters, updateWater, progressCal,
} from '../redux/actions/waterActions';

import Water from './Waters/waters';
// import Waters from '../redux/actions/waterActions';
// import updateWater from '../redux/actions/waterActions';
// import ProgressCal from '../redux/actions/waterActions';

import store from '../redux/store';

import '../App.css';

const AppWrap = styled.div`
  width: 100%;
  height: 690px;
  background-color: #51adcf;
`;

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <AppWrap>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signin" exact component={Signin} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/addwaters" exact component={addWaters} />
            <Route path="waters/:id" exact component={Water} />
            <Route path="/waters" exact component={Water} />
            <Route path="/edit/:id" exact component={updateWater} />
            <Route path="/progress_cal" exact component={progressCal} />
          </Switch>
        </Router>
      </AppWrap>
    </Provider>
  );
};

export default App;
