import React from 'react';
import styled from 'styled-components';

const HeaderWrap = styled.header`
  width: 100%;
  height: 100px;
  border: 1px solid black;
`;

const Hstyle = styled.h2`
  text-align: center;
`;

const Header = () => {
  return(
    <HeaderWrap>
      <Hstyle>Track.it</Hstyle>
    </HeaderWrap>
  );
}

export default Header;