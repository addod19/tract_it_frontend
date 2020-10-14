import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addWaters } from '../../redux/actions/waterActions';
import styled from 'styled-components';

import Footer from '../../pages/Footer';

// import { v1 as uuidv1 } from 'uuid';

const AddWrap = styled.div`
  height:475px;
  width: 100%;
  background-color: #51adcf;

  @media (max-width: 768px) {
    height:450px;
    width: 100%;
    margin-left: 0;
  }
`;

const FormWrap = styled.form`
  width: 100%;
  height: 300px;
  margin-top: 50px;

  @media(max-width: 768px) {
    width: 100%;
  }
`;

const AmountInp = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 4px;
  border: 0;

  &:focus {
    color: blue;
  }

  @media(max-width: 768px) {
    width: 140%;
  }
`;
const TotalInp = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 4px;
  border: 0;

  &:focus {
    color: blue;
  }

  @media(max-width: 768px) {
    width: 140%;
  }
`;

const SubmitData = styled.button`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #1f3c88;
  color: white;
  border: none;

  &:hover {
    cursor: pointer;
  }

  @media(max-width: 768px) {
    width: 140%;
  }
`;

const TrackWater = styled.div`
  color: white;
  font-weight: 500;
  font-size: 23px;
  text-align: center;
`;

const CenterW = styled.div`
  width: 50%;
  margin-left: 25%;

  @media(max-width: 768px) {
    display: flex;
    margin-left: 15%;
  }
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
      amount,
      total,
    });
  };

  return (
    <>
      <AddWrap>
        <TrackWater>
          Add Water
        </TrackWater>
        <CenterW>
          
          <FormWrap onSubmit={onSubmit}>
            <AmountInp
              type="number"
              name="amount"
              value={amount}
              onChange={onChange}
              placeholder="Amount"
              required
            />
            <TotalInp
              type="number"
              name="total"
              placeholder="Water Target"
              value={total}
              onChange={onChange}
              required
            />
            <SubmitData type="submit" onSubmit={onSubmit}>
              Add Water to Data
            </SubmitData>
          </FormWrap>
        </CenterW>
      </AddWrap>
      <Footer />
    </>
  );
};

AddWater.propTypes = {
  addWaters: PropTypes.func.isRequired,
  water: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  water: state.water.water,
});

const mapDispatchToProps = dispatch => ({
  addWaters: (e) => dispatch(addWaters(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddWater);
