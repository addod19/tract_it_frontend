import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addAllWater } from '../../redux/actions/movieActions';
// import Footer from '../../layout/Footer';

const AddWater = ({ addAllWater }) => {
  const [formData, setFormData] = useState({
    amount: '',
    total: '',
  });
  const {
    amount, total,
  } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    addAllWater({
      amount, total,
    });
  };

  return (
    <div>
      <div className="header-title">
        Add Water
      </div>
      <form className="add-stack px-5 pt-5 py-10" onSubmit={onSubmit}>
         <div className="form-group">
          <label className="w-100" htmlFor="seriesName">
            Amount
          <input
            type="number"
            name="name"
            className="form-control"
            placeholder="Amount"
            required
            value={name}
            onChange={onChange}
          />
          </label>
        </div>
        <div className="form-group">
          <label className="w-100" htmlFor="episodeHours">
            Target
          <input
            type="number"
            name="total"
            className="form-control"
            placeholder="Target"
            required
            value={total}
            onChange={onChange}
          />
          </label>
        </div>
        <button type="submit" className="btn mt-3 custom-button">
          Create Water Data
        </button>
      </form>
    </div>
  );
};

AddWater.propTypes = {
  addAllWater: PropTypes.func.isRequired,
  water: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  water: state.addAllWater.water,
});

export default connect(mapStateToProps, { addAllWater })(AddWater);