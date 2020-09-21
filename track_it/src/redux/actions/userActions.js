const defaultUrl = 'http://localhost:3000';

const setUser = payload => ({ type: 'SET_USER', payload });

const loadUser = () => dispatch => {
  fetch(`${defaultUrl}/auto_login`, {
    header: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem(token)}`,
    },
  })
  .then(res => res.json())
  .then(data => {
    localStorage.setItem('token', data.token);
    dispatch(setUser(data.user));
  });
};

const signup = userDetails => dispatch => {
  fetch(`${defaultUrl}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(userDetails),
  })
  .then(res => res.json())
  .then(data => {
    localStorage.setItem('token', data.token),
    dispatch(setUser(data.user));
  });
};

const signin = userDetails => dispatch => {
  fetch(`${defaultUrl}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(userDetails),
  })
  .then(res => res.json())
  .then(data => {
    localStorage.setItem('token', data.token),
    dispatch(setUser(data.user));
  });
};

const signout = () => dispatch => {
  type: 'LOG_OUT'
};

export default { loadUser, signup, signin, signout}

