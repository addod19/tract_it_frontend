import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { signout } from '../redux/actions/authActions';

import Footer from '../pages/Footer';

import Signin from '../components/auth/Login';

const MainWrap = styled.div`
  width: 100%;
  height: 450px;
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

const FooterWrapper = styled.div`
  position: relative;
  margin-bottom: -130px;
`;

const FalseWrap = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid red;
`;


const Home = ({ auth: { loggedIn, user }, signout }) => (
  <MainWrap>
    {loggedIn === false ? (
      <FalseWrap >
        <FormWrap>
          <Signin />
          <SignupWrap>
            <Link to="/signup">
              Signup
            </Link>
          </SignupWrap>
        </FormWrap>
        <Footer />
      </FalseWrap >
    ) : (
      <>
        <UserWrap>
          <HeaderStyle>
            welcome to the water tracking app
            {' '}
            { console.log(user.user.data.user.name ) }
            {user.user.data.user.name}
            {' '}
            !!
          </HeaderStyle>
          <div>
            <button type="button" onClick={signout}>Signout</button>
          </div>
        </UserWrap>
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
        
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
