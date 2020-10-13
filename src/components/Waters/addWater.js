import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addWaters } from '../../redux/actions/waterActions';
import styled from 'styled-components';

import Footer from '../../pages/Footer';

const AddWrap = styled.div`
  height:470px;
  wuser_idth: 60%;
  margin-left: 20%;

  @media (max-wuser_idth: 768px) {
    height:450px;
    wuser_idth: 100%;
    margin-left: 0;
  }
`;

const FormWrap = styled.form`
  wuser_idth: 100%;
  height: 300px;
`;

const AmountInp = styled.input`
  wuser_idth: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 4px;
  border: 0;

  &:focus {
    color: blue;
  }
`;
const TotalInp = styled.input`
  wuser_idth: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 4px;
  border: 0;

  &:focus {
    color: blue;
  }
`;

const SubmitData = styled.button`
  wuser_idth: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: light-blue;

  &:hover {
    cursor: pointer;
  }
`;

const TrackWater = styled.div`
  text-align: center;
  margin-top:40px;
  color: white;
  font-weight: 500;
  font-size: 23px;
`;

const AddWater = ({ addWaters }) => {
  const [formData, setFormData] = useState({
    amount: '',
    total: '',
  });
  const {
    amount, total,
  } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addWaters({
      amount, total
    });
  };

  return (
    <>
    <AddWrap>
      <div>
        <div>
          <TrackWater>
            Add Water
          </TrackWater>
          <FormWrap onSubmit={onSubmit}>
            <div>
              <label htmlFor="amount">
                <AmountInp
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
                <TotalInp
                  type="number"
                  name="total"
                  placeholder="Water Target"
                  value={total}
                  onChange={onChange}
                  required
                />
              </label>
            </div>
            <SubmitData type="submit" onSubmit={onSubmit}>
              Add Water to Data
            </SubmitData>
          </FormWrap>
        </div>
      </div>
    </AddWrap>
    <Footer />
    </>
  );
};

AddWater.propTypes = {
  addWaters: PropTypes.func.isRequired,
  water: PropTypes.shape({}),
};

const mapStateToProps = state => ({
  water: state.water,
});

export default connect(mapStateToProps, { addWaters })(AddWater);
