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
  height: 480px;
  background-color: #51adcf;

  @media (max-width: 768px) {
    height: 480px;
  }

`;

const UserWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  height: 390px;
  @media (max-width: 768px) {
    height: 450px;
  }

`;

const SignupWrap = styled.div`
  margin-left: 23%;
  margin-top: 2%;
  position: absolute;
  top: 300px;
  @media(max-width: 768px) {
    margin-left: 32%;
`;

const FormWrap = styled.div`
  width: 60%;
  height: 200px;
  margin-left: 20%;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

const HeaderStyle = styled.div`
  text-align: center;
`;

const FalseWrap = styled.div`
  width: 80%;
  height: 560px;
  margin-left: 10%;
`;

const Bg = styled.div`
  background-color: #51adcf;
`;

const WelcomeMsg = styled.div`
  font-size: 26px;
  color: white;
`;

const Name = styled.div`
  font-size: 29px;
  color: gray;
`;

const SignoutPos = styled.div`
  position: absolute;
  right: 10%;

  @media(max-width: 768px) {
    top: 10%;
  }
`;

const SignoutBtn = styled.button`
  background-color: red;
  color: white;
  border: none;
`;

const Home = ({ auth: { loggedIn, user }, signout }) => (
  <Bg>
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
      </FalseWrap >
    ) : (
      <>
      <MainWrap>
        <UserWrap>
          <HeaderStyle>
            <WelcomeMsg>welcome to the water tracking app</WelcomeMsg>
            {/* { console.log(user.name) } */}
            <Name>{this.props.name}</Name>
            {' '}
            !!
          </HeaderStyle>
          <SignoutPos>
            <SignoutBtn type="button" onClick={signout}>Signout</SignoutBtn>
          </SignoutPos>
        </UserWrap>
      </MainWrap>
      <Footer/>
      </>
    )}
  </Bg>
);

Home.propTypes = {
  auth: PropTypes.shape({
    loggedIn: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      email: PropTypes.string,
      name: PropTypes.string,
    }).isRequired,
  }).isRequired,
  signout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  name: state.auth.user.user.name,
  // user: state.user
});

export default connect(mapStateToProps, { signout })(Home);
