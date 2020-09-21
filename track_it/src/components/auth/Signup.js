import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signup } from '../../redux/actions/authActions';

const SignUp = ({ signup, authenticated: { loggedIn }}) => {
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = signupData;

  const onChange = e => setSignupData({ ...signupData, [e.target.name]: e.target.valie });

  const onSubmit = async evt => {
    evt.preventDefault();
    signup({ name, email, password });
  };

  if (loggedIn) {
    return <Redirect to="/" />
  }

  return (
    <div className="row">
      <form onSubmit={onSubmit}>
        <div className="formGroup">
          <label htmlFor="name">
            Name
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              value={name}
              onChange={onChange}
              required
            />
          </label>
        </div>
        <div className="formGroup">
          <label htmlFor="email">
            Email
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              value={email}
              onChange={onChange}
              required
            />
          </label>
        </div>
        <div className="formGroup">
          <label htmlFor="password">
            Password
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={onChange}
              required
            />
          </label>
        </div>
        <button type="submit" className="btnbtn-primary">
          Create a User
        </button>
      </form>
    </div>
  );
};

SignUp.propTypes = {
  signup: PropTypes.func.isRequired,
  authenticated: PropTypes.shape({
    loggedIn: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  authenticated: state.auth,
});

export default connect(mapStateToProps, { signup })(SignUp);