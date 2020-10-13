import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PieChart } from 'react-minimal-pie-chart';
import progressCal from '../redux/actions/progressActions';

import Footer from '../pages/Footer';

import styled from 'styled-components';

const MainWrap = styled.main`
  height: 500px;
  width: 100%;
  display: flex;
  background-color: #51adcf;
`;

const ProgressStyle = styled.section`
  width: 90%;
  height: 400px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-left: 10%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ChartSize = styled.div`
  width: 200px;
  height: 220px;
  text-align: center;

  @media (max-width: 768px) {
    width: 100px;
    height: 120px;
  }
`;
const Progress = ({ progressCal, progress_calculations }) => {
  const result = (amount, total) => {
    if (total === 0) {
      return 100;
    }
    const percentage = (amount / total) * 100;
    return percentage >= 100 ? 100 : Math.round(percentage);
  };

  useEffect(() => {
    progressCal();
  }, [progressCal]);

  return (
    <>
    <MainWrap>
        <ProgressStyle>
          <ChartSize>
            <PieChart
              data={[{
                value: 1, color: '#8ce08a', key: `${result(progress_calculations[0].amount,
                 progress_calculations[0].total)} %`,
              }]}
              reveal={result(progress_calculations[0].amount, progress_calculations[0].total)}
                lineWidth={20}
                animate
                label={({ dataEntry }) => dataEntry.key}
                labelStyle={{ fontSize: '1.6rem' }}
            />
            <p>
              {progress_calculations[0].amount}
              {' '}
              /
              {' '}
              {progress_calculations[0].total}
              {' '}
              Water target acheived
            </p>
          </ChartSize>
          <ChartSize>
            <PieChart
              data={[{
                value: 1, color: '#8ce08a', key: `${result(progress_calculations[1].amount,
                 progress_calculations[1].total)} %`,
              }]}
              reveal={result(progress_calculations[1].amount, progress_calculations[1].total)}
                lineWidth={20}
                animate
                label={({ dataEntry }) => dataEntry.key}
                labelStyle={{ fontSize: '1.6rem' }}
            />
            <p>
              {progress_calculations[1].amount}
              {' '}
              /
              {' '}
              {progress_calculations[1].total}
              {' '}
              Water target acheived
            </p>
          </ChartSize>
          <ChartSize>
            <PieChart
              data={[{
                value: 1, color: '#8ce08a', key: `${result(progress_calculations[2].amount,
                 progress_calculations[2].total)} %`,
              }]}
              reveal={result(progress_calculations[2].amount, progress_calculations[2].total)}
                lineWidth={20}
                animate
                label={({ dataEntry }) => dataEntry.key}
                labelStyle={{ fontSize: '1.6rem' }}
            />
            <p>
              {progress_calculations[2].amount}
              {' '}
              /
              {' '}
              {progress_calculations[2].total}
              {' '}
              Water target acheived
            </p>
          </ChartSize>
        </ProgressStyle>
    </MainWrap>
    <Footer />
    </>
  );
};

Progress.propTypes = {
  progress_calculations: PropTypes.shape({
    amount: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  }),
  progressCal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  progress_calculations: state.waters,
});

export default connect(mapStateToProps, { progressCal })(Progress);
