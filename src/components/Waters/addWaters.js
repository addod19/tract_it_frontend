import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addAllWaters } from '../../redux/actions/waterActions';

const AddWaters = ({ addAllWaters }) => {
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
    addAllWaters({
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

AddWaters.propTypes = {
  addAllWaters: PropTypes.func.isRequired,
  water: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  water: state.waters.water,
});

export default connect(mapStateToProps, { addAllWaters })(AddWaters);
