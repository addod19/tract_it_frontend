import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PieChart } from 'react-minimal-pie-chart';
import { getWaters } from '../../redux/actions/waterActions';

import Footer from '../../pages/Footer';

import styled from 'styled-components';

const H4 = styled.h4`
  height: 550px;
  color: white;

  @media(max-width: 768px) {
    height: 450px;
  }
`;

const P = styled.p`
  position: absolute;
  left: 35%;

  @media(max-width: 768px) {
    left: 10%;
  }
`;

const DataContent = styled.div`
  display: flex;
  background-color: #51adcf;
  margin-bottom: 0px;

  @media(max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const DataRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 150px;
  margin-left: 20%;

  @media(max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-left: 35%;
    gap: 10px;
  }
`;


const AllWater = ({ getWaters, waters }) => {
  useEffect(() => {
    getWaters();
  }, [getWaters]);

  const result = (amount, total) => {
    if (amount + amount === total) {
      return 100;
    }
    const percentage = ((amount) / (total)) * 100;
    return percentage >= 100 ? 100 : Math.round(percentage);
  };
  
  const allStacks = waters.waters.map(water => (
    <div key={water.id}>
      <PieChart className="cSize"
        data={[{
          value: 1, color: '#1F3C88', key: `${result(water.amount, water.total)} %`,
        }]}
        reveal={result(water.amount, water.total)}
        lineWidth={20}
        animate
        label={({ dataEntry }) => dataEntry.key}
      />
      <h5>Water Intake: {water.amount}ml</h5>
      <h5>Water Target: {water.total}ml</h5>
      <Link
        to={{ pathname: `/waters/${water.id}` }}
      >
        View Water Details
      </Link>
    </div>
  ));

  const noWaterData = (
    <H4>
      <P>No water data yet? Kindly create one</P>
    </H4>
  );

  return waters.waters ? (
    <>
    <DataContent>
      <DataRow>
        {waters.waters.length > 0 ? allStacks : noWaterData}
      </DataRow>
    </DataContent>
    <Footer />
    </>
  ) : <h2>Loading........</h2>;
};

AllWater.propTypes = {
  getWaters: PropTypes.func.isRequired,
  waters: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  waters: state.waters,
});

export default connect(mapStateToProps, { getWaters })(AllWater);
