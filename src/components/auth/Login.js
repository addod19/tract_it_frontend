import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { signin } from '../../redux/actions/authActions';

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

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
`;

const EmailWrap = styled.div`
  width: 100%;
  margin-left: 130%;
  margin-bottom: 10%;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const PasswordWrap = styled.div`
  width: 100%;
  margin-left: 130%;
  margin-bottom: 10%;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const ButtonWrap = styled.div`
  width: 100%;
  margin-left: 130%;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Signin = ({ signin, authenticated: { loggedIn } }) => {
  const [loginData, setloginData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = loginData;

  const handleChange = e => setloginData({ ...loginData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    signin({ email, password });
  };

  if (loggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <SignInWrap>
      <form onSubmit={handleSubmit}>
        <EmailWrap>
          <input
            type="email"
            onChange={handleChange}
            value={email}
            placeholder="Enter your email"
            name="email"
            required
          />
        </EmailWrap>
        <PasswordWrap>
          <input
            type="password"
            onChange={handleChange}
            value={password}
            placeholder="Enter your paswword"
            name="password"
            required
          />
        </PasswordWrap>
        <ButtonWrap>
          <button type="submit" className="btn" onSubmit={handleSubmit}>Login</button>
        </ButtonWrap>
      </form>
    </SignInWrap>
  );
};

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
