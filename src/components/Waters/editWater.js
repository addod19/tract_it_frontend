import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getWater, updateWater } from '../../redux/actions/waterActions';

const EditWater = ({
  getWater, match, updateWater, history, water
}) => {
  const [formData, setFormData] = useState({
    amount: '',
    total: '',
  });
  const {
    amount, total,
  } = formData;

  const { id } = match.params;
  useEffect(() => {
    getWater(id);
    setFormData({
      amount: !water.amount ? '' : water.amount,
      total: !water.total ? '' : water.total,
    });
  }, [getWater, id, water.amount, water.total]);

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    updateWater(id, {
      amount, total,
    }, history);
  };

  return (
    <>
      <div>
          <div>
            Edit Water
          </div>
          <form onSubmit={onSubmit}>
            <div>
              <label htmlFor="amount">
                Amount
                <input
                  type="number"
                  name="amount"
                  value={amount}
                  onChange={onChange}
                  placeholder="Amount"
                  required

                />
              </label>
            </div>
            <div>
              <label htmlFor="WaterTarget">
                Target
                <input
                  type="number"
                  name="target"
                  placeholder="Water Target"
                  required
                  value={total}
                  onChange={onChange}
                />
              </label>
            </div>
            <button type="submit">
              Save changes
            </button>
            <Link to={`/water/${id}`}>
              Back to water data
            </Link>
          </form>
      </div>
    </>
  );
};

EditWater.propTypes = {
  getWater: PropTypes.func.isRequired,
  water: PropTypes.shape({}).isRequired,
  updateWater: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  water: state.water,
});

export default connect(mapStateToProps, { getWater, updateWater })(withRouter(EditWater));
