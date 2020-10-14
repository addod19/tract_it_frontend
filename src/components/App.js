import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import Signin from './auth/Login';
import Signup from './auth/Signup';
import Home from '../pages/Home';
import setAuthToken from '../helpers/setAuthToken';
import loadUser from '../redux/actions/authActions';

import Water from './Waters/waters';
import AddWater from './Waters/addWater';
import EditWater from './Waters/editWater';
import Progress from '../pages/Progress';
// import AllWater from './Waters/allWaterData';
import WaterList from './Waters/waters';

import Header from '../pages/Header';

import store from '../redux/store';

import '../App.css';

const AppWrap = styled.div`
  width: 100%;
  height: 570px;
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
        <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signin" exact component={Signin} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/waters" exact component={AddWater} />
            <Route path="waters/:id" exact component={Water} />
            <Route path="/allData" exact component={WaterList} />
            <Route path="/edit/:id" exact component={EditWater} />
            <Route path="/water_levels/progress" exact component={Progress} />
          </Switch>
        </Router>
      </AppWrap>
    </Provider>
  );
};

export default App;
