import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
// import water from '../../redux/reducers/water';


class WaterList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      water: [],
      // amount: '',
      // total: '',
    }
  }

  componentDidMount() {
    const auth_token = localStorage.getItem('token');
    const url = 'http://localhost:3000/allData';

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

    // const { id } = this.state.water;

    return(
      <>
        <ul>
          {
            if(water) {
              { water.map(w => (
                <li key={w.id}>
                  { }
                  { w.amount }
                  { }
                  { w.total }
                </li>
              ))}
            }
          }
          
        </ul>
      </>
    )
  }

  
}

const mapStateToProps = state => ({
  water: state.water,
});

WaterList.propTypes = {
  water: PropTypes.shape({}).isRequired,
}
export default connect(mapStateToProps, null)(WaterList);