import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { signup } from '../../redux/actions/authActions';

const RegFormWrap = styled.div`
  width: 50%;
  height: auto;
  padding: 20px;
  box-shadow: inset 0 -3em 3em rgba(0,0,0,0.1), 
              0 0  0 2px rgb(255,255,255),
              0.3em 0.3em 1em rgba(0,0,0,0.3);
  margin-left: 25%;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    margin-left: 0;
  }
`;

const NameWrap = styled.div`
  margin-left: 30%;
  margin-bottom: 5%;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

const EmailWrap = styled.div`
  margin-left: 30%;
  margin-bottom: 5%;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

const PasswordWrap = styled.div`
  margin-left: 30%;
  margin-bottom: 5%;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

const ButtonWrap = styled.button`
  margin-left: 30%;
  color: white;
  background-color: blue;
  border: 0;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const SignUp = ({ signup, authenticated: { loggedIn } }) => {
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = signupData;

  const onChange = e => setSignupData({ ...signupData, [e.target.name]: e.target.value });

  const onSubmit = async evt => {
    evt.preventDefault();
    signup({ name, email, password });
  };

  if (loggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <RegFormWrap>
      <form onSubmit={onSubmit}>
        <NameWrap>
          <label htmlFor="name">
            Name
            <input
              type="text"
              onChange={onChange}
              placeholder="Name"
              value={name}              
              required
            />
          </label>
        </NameWrap>
        <EmailWrap>
          <label htmlFor="email">
            Email
            <input
              type="email"
              onChange={onChange}
              placeholder="Email"
              value={email}
              required
            />
          </label>
        </EmailWrap>
        <PasswordWrap>
          <label htmlFor="password">
            Password
            <input
              type="password"
              onChange={onChange}
              placeholder="Password"
              value={password}
              required
            />
          </label>
        </PasswordWrap>
        <ButtonWrap type="submit" onSubmit={onSubmit}>
          {/* <button  > */}
            Create a User
          {/* </button> */}
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
