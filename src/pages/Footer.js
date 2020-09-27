import React from 'react';
import { Link } from 'react-router-dom';
import addWater from '../images/add-stack.png';
import home from '../images/home.png';
import trackIt from '../images/track-it.png';
import progress from '../images/progress.png';

const Footer = () => (

  <footer className="footer">
    <Link
      to="/addwater"
      className="btn btn-lg footer-btn"
      role="button"
    >
      <img className="footer-img" src={addWater} alt="addwater" />
      <p className="mb-0">Add Water</p>
    </Link>
    <Link
      to="/water"
      className="btn footer-btn"
      role="button"
    >
      <img className="footer-img" src={trackIt} alt="trackit" />
      <p className="mb-0">Track.it</p>
    </Link>
    <Link
      to="/progress_cal"
      className="btn btn-lg footer-btn"
      role="button"
    >
      <img className="footer-img" src={progress} alt="progress" />
      <p className="mb-0">Your progress</p>
    </Link>
    <Link
      to="/"
      className="btn btn-lg footer-btn"
      role="button"
    >
      <img className="footer-img" src={home} alt="home" />
      <p className="mb-0">Home</p>
    </Link>
  </footer>
);

export default Footer;
