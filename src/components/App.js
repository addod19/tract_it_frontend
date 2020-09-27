import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signin from './auth/Login';
import Signup from './auth/Signup';
import Home from '../pages/Home';
import setAuthToken from '../helpers/setAuthToken';
// import loadUser from '../redux/actions/authActions'; 
import { Provider } from 'react-redux';
import store from '../redux/store';

import AddWaters from '../redux/actions/waterActions';
import Waters from '../redux/actions/waterActions';
import EditWater from '../redux/actions/waterActions';
import ProgressCal from '../redux/actions/waterActions';

import Nav from '../components/Navbar';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    // store.dispatch(loadUser(``));
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/add_waters" exact component={AddWaters} />
          <Route path="waters/:id" exact component={Waters} />
          <Route path="/waters" exact component={Waters} />
          <Route path="/edit/:id" exact component={EditWater} />
          <Route path="/progress_cal" exact component={ProgressCal} />
        </Switch>
        <Nav />
      </Router>
    </Provider>
  );
};

export default App;
