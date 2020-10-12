import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addWaters } from '../../redux/actions/waterActions';
import styled from 'styled-components';

import Footer from '../../pages/Footer';


const AddWrap = styled.div`
  height:400px;
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
    console.log(amount, total);
    addWaters({
      amount, total
    });
  };

  return (
    <>
    <AddWrap>
      <div className="text-center">
        <TrackWater>
          Add Water
        </TrackWater>
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
      </div>
    </AddWrap>
    <Footer />
    </>
  );
};

AddWater.propTypes = {
  addWaters: PropTypes.func.isRequired,
  water: PropTypes.shape([]),
};

const mapStateToProps = store => ({
  amount: store.water.amount,
  total: store.water.total,
});

const mapDispatchToProps = dispatch => ({
  addWaters: (e) => dispatch(addWaters(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddWater);
