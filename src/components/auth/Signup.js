import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { signup } from '../../redux/actions/authActions';

const RegFormWrap = styled.div`
  width: 100%;
  height: 560px;
  display: flex;
  flex-direction: row;
  padding: 20px;
  background-color: #51adcf;


  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
`;

const NameWrap = styled.div`
  width: 60%;
  @media (max-width: 768px) {
    width: 90%;
    margin-left: 5%;
  }
`;

const EmailWrap = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    width: 90%;
    margin-left: 5%;
  }
`;

const PasswordWrap = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    width: 90%;
    margin-left: 5%;
  }
`;

const ButtonWrap = styled.button`
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #1f3c88;
  color: white;
  border: 0;

  &:hover {
    cursor: pointer;
  }

  @media(max-width: 768px) {
    width: 116%;
    margin-left: 5%;
  }
`;

const FormWrap = styled.form`
  width: 50%;
  margin-left: 38%;
  height: 300px;

  @media(max-width: 768px) {
    width: 80%;
    margin-left: 0px;
  }
`;

const NameInp = styled.input`
  width: 130%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 4px;
  border: 0;

  &:focus {
    color: blue;
  }
`;

const EmailInp = styled.input`
  width: 130%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 4px;
  border: 0;

  &:focus {
    color: blue;
  }
`;

const PasswordInp = styled.input`
  width: 130%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 4px;
  border: 0;

  &:focus {
    color: blue;
  }
`;

const CenterLink = styled.div`
  text-align: center;
  margin-right: 45%;

  @media(max-width: 768px) {
    margin-right: 0%;
  }
`;

const SignUp = ({ signup, authenticated: { loggedIn } }) => {
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = signupData;

  const handleChange = e => setSignupData({ ...signupData, [e.target.name]: e.target.value });

  const handleSubmit = async evt => {
    evt.preventDefault();
    signup(signupData);
  };

  if (loggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <RegFormWrap>
      <FormWrap onSubmit={handleSubmit}>
        <NameWrap>
          <NameInp
            type="text"
            onChange={handleChange}
            placeholder="Name"
            value={name}
            name="name"
            required
          />
        </NameWrap>
        <EmailWrap>
          <EmailInp
            type="email"
            onChange={handleChange}
            placeholder="Email"
            value={email}
            name="email"
            required
          />
        </EmailWrap>
        <PasswordWrap>
          <PasswordInp
            type="password"
            onChange={handleChange}
            placeholder="Password"
            value={password}
            name="password"
            required
          />
        </PasswordWrap>
        <ButtonWrap type="submit" onClick={handleSubmit}>
          Create a new User
        </ButtonWrap>
        <CenterLink>
          or
          {' '}
          <Link to="/signin">
            Signin
          </Link>
        </CenterLink>
      </FormWrap>
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
