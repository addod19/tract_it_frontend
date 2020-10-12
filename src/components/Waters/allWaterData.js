import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PieChart } from 'react-minimal-pie-chart';
import { getWaters } from '../../redux/actions/waterActions';

import Footer from '../../pages/Footer';

import styled from 'styled-components';

const ContainerWrap = styled.section`
  height: auto;
  width: 100%;
  margin-bottom: 10px;

  @media(max-width: 768px) {
    
  }
`;

const ChartSize = styled.div`
  height: 150px;
  width: 900px;
  display: flex;

  @media(max-width: 768px) {
    width: 80%;
  }
`;

const CenterHeader = styled.div`
  text-align: center;
`;

const DisplayData = styled.div`
  display: grid;
  grid-template-column: repeat(3, 1fr);
`;

const MoreInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AllWater = ({ getWaters, waters }) => {
  useEffect(() => {
    getWaters();
  }, [getWaters]);

  const result = (amount, total) => {
    if (amount + amount === total) {
      return 100;
    }
    const percentage = ((amount + amount) / (total)) * 100;
    return percentage >= 100 ? 100 : Math.round(percentage);
  };

  const allStacks = waters.map(water => (
    <ContainerWrap key={water.id}>
      <ChartSize>
        <PieChart
          data={[{
            value: 1, color: '#8ce08a', key: `${result(water.amount, water.total)} %`,
          }]}
          reveal={result(water.amount, water.total)}
          lineWidth={20}
          animate
          label={({ dataEntry }) => dataEntry.key}
        />
        <MoreInfo>
          <h5>{water.amount}</h5>
          <Link
            to={{ pathname: `/waters/:${water.id}` }}
          >
            View All Water
          </Link>
        </MoreInfo>
      </ChartSize>
    </ContainerWrap>
  ));

  const noWaterData = (
    <div>
      <h4>
        No water data yet? Kindly create one
      </h4>
    </div>
  );

  return waters ? (
    <>
      <CenterHeader>
        Track Water Intake
      </CenterHeader>
      < DisplayData>
        {waters.length > 0 ? allStacks : noWaterData}
      </ DisplayData>
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
