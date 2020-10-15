import React, { Component } from 'react';
// import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import water from '../../redux/reducers/water';


class WaterList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      water: [],
      amount: '',
      total: '',
    }
  }

  componentDidMount() {
    const auth_token = localStorage.getItem('token');
    const url = 'http://localhost:3000';

    try {
      const wD = axios.get(url, {
        headers: {
          Authorization: `Bearer ${auth_token}`,
        },
      });
      this.setState({
        water: wD.data,
      });
    } catch {
      console.log('sorry, error getting data');
    }
    
  }

  render() {


    return(
      <>
        <ul>
          { water.map(w => {
            <li key={w.id}>
              { }
              { w.amount }
              { }
              { w.total }
            </li>
          })}
        </ul>
      </>
    )
  }

  
}

WaterList.propTypes = {
  water: PropTypes.array.isRequired,
  amount: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
}
export default WaterList;