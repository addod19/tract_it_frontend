import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signup } from '../../redux/actions/authActions';

import styled from 'styled-components';

const RegFormWrap = styled.div`
  width: 50%;
  height: auto;
  padding: 20px;
  box-shadow: inset 0 -3em 3em rgba(0,0,0,0.1), 
              0 0  0 2px rgb(255,255,255),
              0.3em 0.3em 1em rgba(0,0,0,0.3);
  margin-left: 25%;
`;

const NameWrap = styled.div`
  margin-left: 30%;
  margin-bottom: 5%;
`;

const EmailWrap = styled.div`
  margin-left: 30%;
  margin-bottom: 5%;
`;

const PasswordWrap = styled.div`
  margin-left: 30%;
  margin-bottom: 5%;
`;

const ButtonWrap = styled.div`
  margin-left: 30%;
`;

const SignUp = ({ signup, authenticated: { loggedIn }}) => {
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = signupData;

  const onChange = e => setSignupData({ ...signupData, [e.target.name]: e.target.valie });

  const onSubmit = async evt => {
    evt.preventDefault();
    signup({ name, email, password });
  };

  if (loggedIn) {
    return <Redirect to="/" />
  }

  return (
    <RegFormWrap>
      <form onSubmit={onSubmit}>
        <NameWrap>
          <label htmlFor="name">
            Name
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={onChange}
              required
            />
          </label>
        </NameWrap>
        <EmailWrap>
          <label htmlFor="email">
            Email
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              value={email}
              onChange={onChange}
              required
            />
          </label>
        </EmailWrap>
        <PasswordWrap>
          <label htmlFor="password">
            Password
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={onChange}
              required
            />
          </label>
        </PasswordWrap>
        <ButtonWrap>
          <button type="submit" onSubmit={onSubmit}>
            Create a User
          </button>
        </ButtonWrap>
      </form>
    </RegFormWrap>
  );
};

SignUp.propTypes = {
  signup: PropTypes.func.isRequired,
  authenticated: PropTypes.shape({
    loggedIn: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  authenticated: state.auth,
});

export default connect(mapStateToProps, { signup })(SignUp);