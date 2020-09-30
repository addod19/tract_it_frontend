import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { signout } from '../redux/actions/authActions';
import Footer from './Footer';
import Signin from '../components/auth/Login';

const MainWrap = styled.div`
  width: 100%;
  height: 690px;
  background-color: #51adcf;
`;

const UserWrap = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  border: 1px solid red;
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
const Home = ({ auth: { loggedIn, user }, signout }) => (
  <MainWrap>
    {loggedIn === false ? (
      <>
        <IntroWrap>
          <IntroText>Water Intake Tracker</IntroText>
        </IntroWrap>
        <div>
          <Signin />
          <SignupWrap>
            <Link to="/signup">
              Signup
            </Link>
          </SignupWrap>

        </div>
      </>
    ) : (
      <>
        <UserWrap>
          <div>
            Home
          </div>
          <div>
            welcome
            {' '}
            {/* {user.email} */}
            {' '}
            !!
          </div>
          <div>
            <button type="button" onClick={signout}>Signout</button>
          </div>
        </UserWrap>
        <Footer />
      </>
    )}
  </MainWrap>
);

Home.propTypes = {
  auth: PropTypes.shape({
    loggedIn: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      email: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  signout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { signout })(Home);
