import React from 'react';
import styled from 'styled-components';

const NavStyle = styled.div`
  background-color: red;
`;

const Nav = () => {
  return (
    // <nav className="navbar">
      <NavStyle>
      <ul>
        <li>
          <a href="/signup">Register</a>
        </li>
        <li>
          <a href="/signin">SignIn</a>
        </li>
      </ul>
      </NavStyle>
    // </nav>
  )
};

export default Nav;