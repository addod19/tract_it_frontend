import React from 'react';
import { Link } from 'react-router-dom';
import addWater from '../images/add-stack.png';
import home from '../images/home.png';
import trackIt from '../images/track-it.png';
import progress from '../images/progress.png';

import '../App.css';
import styled from 'styled-components';

const FooterWrap = styled.footer`
  height: 100px;
  width: 100%;
  border: 1px solid green;
  background-color: #808080;
  // margin-left: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  text-align: center;
  // margin-top: 45%;
`;

const LogoWrap = styled.div`

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
      <LogoWrap>
        <ImgSize src={addWater} alt="addwater" />
      </LogoWrap>
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
