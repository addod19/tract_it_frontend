import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { signout } from '../redux/actions/authActions';

import Signin from '../components/auth/Login';

const MainWrap = styled.div`
  width: 100%;
  height: 650px;
  background-color: #51adcf;

  @media (max-width: 768px) {
    height: 520px;
  }

`;

const UserWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  height: 390px;
  border: 1px solid black;
`;

const IntroWrap = styled.div`
  height: 40px;
  width: 50%;
`;

const IntroText = styled.div`
  text-align: center;
  position: absolute;
  margin-top: 20%;
  margin-left: 40%;
  font-size: 25px;
`;

const SignupWrap = styled.div`
  margin-left: 50%;
`;

const FormWrap = styled.div`
  width: 60%;
  height: auto;
  margin-left: 15%;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

const HeaderStyle = styled.div`
  text-align: center;
`;
const Home = ({ auth: { loggedIn, user }, signout }) => (
  <MainWrap>
    {loggedIn === false ? (
      <>
        <FormWrap>
          <Signin />
          <SignupWrap>
            <Link to="/signup">
              Signup
            </Link>
          </SignupWrap>

        </FormWrap>
      </>
    ) : (
      <>
        <UserWrap>
          <HeaderStyle>
            welcome to the water tracking app
            {' '}
            {user.config.email}
            {' '}
            !!
          </HeaderStyle>
          <div>
            <button type="button" onClick={signout}>Signout</button>
          </div>
        </UserWrap>
        
      </>
    )}
  </MainWrap>
);

Home.propTypes = {
  auth: PropTypes.shape({
    loggedIn: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      email: PropTypes.string,
    }).isRequired,
  }).isRequired,
  signout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { signout })(Home);
