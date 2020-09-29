import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addWaters } from '../../redux/actions/waterActions';

const AddWater = ({ addWaters }) => {
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
    addWaters({
      amount, total,
    });
  };

  return (
    <>
      <div>
        <div>
          <div>
            Add Water
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
              Add Water to Data
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

AddWater.propTypes = {
  addWaters: PropTypes.func.isRequired,
  water: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  water: state.waters.water,
});

export default connect(mapStateToProps, { addWaters })(AddWater);
