import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signin } from '../../redux/actions/authActions';

import styled from 'styled-components';

const SignInWrap = styled.div`
  width: 50%;
  height: 140px;
  display: flex;
  flex-direction: row;
  padding: 20px;
  box-shadow: inset 0 -3em 3em rgba(0,0,0,0.1), 
              0 0  0 2px rgb(255,255,255),
              0.3em 0.3em 1em rgba(0,0,0,0.3);
  margin-left: 25%;
`;

const EmailWrap = styled.div`
  width: 100%;
  margin-left: 130%;
  margin-bottom: 10%;
`;

const PasswordWrap = styled.div`
  width: 100%;
  margin-left: 130%;
  margin-bottom: 10%;
`;

const ButtonWrap = styled.div`
  width: 100%;
  margin-left: 130%;
`;

const Signin = ( { signin, authenticated: { loggedIn }}) => {
  const [loginData, setloginData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = loginData;

  const onChange = e => setloginData({ ...loginData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    signin({ email, password });
  }

  if (loggedIn) {
    return <Redirect to='/' />;
  }

  return(
    <SignInWrap>
      <form onSubmit={onSubmit}>
        <EmailWrap>
          <input type='email' onChange={onChange} value={email} 
          placeholder="Enter your email" name="email" required /> 
        </EmailWrap>
        <PasswordWrap>
          <input type='password' onChange={onChange} value={password} 
          placeholder="Enter your paswword" name="password" required /> 
        </PasswordWrap>
        <ButtonWrap>
          <button type="submit" onSubmit={onSubmit}>Login</button>
        </ButtonWrap>
      </form>
    </SignInWrap>
  )
}


Signin.propTypes = {
  signin: PropTypes.func.isRequired,
  authenticated: PropTypes.shape({
    loggedIn: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  authenticated: state.auth,
});

export default connect(mapStateToProps, { signin })(Signin);