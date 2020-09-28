import React from 'react';
import { Link } from 'react-router-dom';
import addWater from '../images/add-stack.png';
import home from '../images/home.png';
import trackIt from '../images/track-it.png';
import progress from '../images/progress.png';

import '../App.css';
import styled from 'styled-components';

const FooterWrap = styled.div`
  height: 100px;
  background-color: white;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  position: relative;
  margin-top: 45%;
`;

const LogoWrap = styled.div`

`;

const Footer = () => (

  <FooterWrap>
    <Link
      to="/add_waters"
      className="btn btn-lg footer-btn"
      role="button"
    >
      <LogoWrap>
        <img className="footer-icons" src={addWater} alt="addwater" />
      </LogoWrap>
      <p className="mb-0">Add Water</p>
    </Link>
    <Link
      to="/water"
      className="btn footer-btn"
      role="button"
    >
      <img className="footer-icons" src={trackIt} alt="trackit" />
      <p className="mb-0">Track.it</p>
    </Link>
    <Link
      to="/progress_cal"
      className="btn btn-lg footer-btn"
      role="button"
    >
      <img className="footer-icons" src={progress} alt="progress" />
      <p className="mb-0">Your progress</p>
    </Link>
    <Link
      to="/"
      className="btn btn-lg footer-btn"
      role="button"
    >
      <img className="footer-icons" src={home} alt="home" />
      <p className="mb-0">Home</p>
    </Link>
  </FooterWrap>
);

export default Footer;
