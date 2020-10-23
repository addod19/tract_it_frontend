import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import addWater from '../images/add-stack.png';
import home from '../images/home.png';
import trackIt from '../images/track-it.png';
import progress from '../images/progress.png';

import '../App.css';

const FooterWrap = styled.footer`
  height: 100px;
  width: 100%;
  background-color: #808080;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  text-align: center;
  // margin-top: 90px;
  @media(max-width: 768px) {
    margin-top: -10px;
  }
`;

const ImgSize = styled.img`
  height: 40px;
  width: 40px;
`;
const Footer = () => (

  <FooterWrap>
    <Link
      to="/waters"
      role="button"
    >
      <ImgSize src={addWater} alt="addwater" />
      <p>Add Water</p>
    </Link>
    <Link
      to="/allData"
      role="button"
    >
      <ImgSize src={trackIt} alt="trackit" />
      <p>Track.it</p>
    </Link>
    <Link
      to="/water_levels/progress"
      role="button"
    >
      <ImgSize src={progress} alt="progress" />
      <p>Your progress</p>
    </Link>
    <Link
      to="/"
      role="button"
    >
      <ImgSize src={home} alt="home" />
      <p>Home</p>
    </Link>
  </FooterWrap>
);

export default Footer;
