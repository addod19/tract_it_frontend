import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Login = ( { login, authenticated: { loggedIn }}) => {
  const [loginData, setloginData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = loginData;

  const onChange = e => setloginData({ ...loginData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault;
    login({ email, password });
  }

  if (loggedIn) {
    return <Redirect to='/' />;
  }

  return(
    <>
      <form onSubmit={onSubmit}>
        <input type='email' onChange={onChange} value={email} name="email" required /> 
        <input type='password' onChange={onChange} value={password} name="password" required /> 
        <button type="submit">Login</button>
      </form>
    </>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  authenticated: PropTypes.shape({
    loggedIn: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  authenticate: state.auth,
});

export default connect(mapStateToProps, { login })(Login);