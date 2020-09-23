import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signout } from '../redux/actions/authActions';

const Home = ({ auth: { loggedIn, user }, signout }) => (
  <div>
    {loggedIn === false ? (
        <>
        <div >
          <h3>Water Intake Tracker</h3>
        </div>
        <div>
          <Link to="/signin">
            Signin
          </Link>
          <Link to="/signup">
            Signup
          </Link>
        </div>
        </>
    ) : (
      <div>
        <div>
          Home
        </div>
        <div>
          {user.email}
        </div>
        <div>
          <button type="button" onClick={signout}>Signout</button>
        </div>
      </div>
    )}
  </div>
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
