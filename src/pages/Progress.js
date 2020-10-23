import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PieChart } from 'react-minimal-pie-chart';
import styled from 'styled-components';
import progressCal from '../redux/actions/progressActions';

import Footer from './Footer';

// const MainWrap = styled.main`
//   height: 500px;
//   width: 100%;
//   display: flex;
//   background-color: #51adcf;
// `;

// const ProgressStyle = styled.section`
//   width: 90%;
//   height: 400px;
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   margin-left: 10%;

//   @media (max-width: 768px) {
//     grid-template-columns: repeat(2, 1fr);
//   }
// `;

// const ChartSize = styled.div`
//   width: 200px;
//   height: 220px;
//   text-align: center;

//   @media (max-width: 768px) {
//     width: 100px;
//     height: 120px;
//   }
// `;

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

const Progress = ({ progressCal, progressCalculations }) => {
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

  const progList = progressCalculations.map(water => (
    <div key={water.id}>
      <PieChart
        className="cSize"
        data={[{
          value: 1, color: '#1F3C88', key: `${result(water.amount, water.total)} %`,
        }]}
        reveal={result(water.amount, water.total)}
        lineWidth={20}
        animate
        label={({ dataEntry }) => dataEntry.key}
      />
    </div>
  ));

  const noProgress = () => (
    <h1>Sorry, No progress</h1>
  );

  return progressCalculations ? (
    <>
      <DataContent>
        <DataRow>
          {progressCalculations.length > 0 ? progList : noProgress}
        </DataRow>
      </DataContent>
      <Footer />
    </>
  )
    : (
      <>
        {/* <MainWrap> */}
        {/* <ProgressStyle>
          <ChartSize>
            <PieChart
              data={[{
                value: 1, color: '#1F3C88', key: `${result(progressCalculations.amount,
                 progressCalculations.total)} %`,
              }]}
              reveal={result(progressCalculations.amount, progressCalculations.total)}
                lineWidth={20}
                animate
                label={({ dataEntry }) => dataEntry.key}
                labelStyle={{ fontSize: '1.6rem' }}
            />
            <p>
              {progressCalculations.amount}
              {' '}
              /
              {' '}
              {progressCalculations.total}
              {' '}
              Water target acheived
            </p>
          </ChartSize>
          {/* <ChartSize>
            <PieChart
              data={[{
                value: 1, color: '#1F3C88', key: `${result(progressCalculations[1].amount,
                 progressCalculations[1].total)} %`,
              }]}
              reveal={result(progressCalculations[1].amount, progressCalculations[1].total)}
                lineWidth={20}
                animate
                label={({ dataEntry }) => dataEntry.key}
                labelStyle={{ fontSize: '1.6rem' }}
            />
            <p>
              {progressCalculations[1].amount}
              {' '}
              /
              {' '}
              {progressCalculations[1].total}
              {' '}
              Water target acheived
            </p>
          </ChartSize> */}
        {/* <ChartSize>
            <PieChart
              data={[{
                value: 1, color: '#1F3C88', key: `${result(progressCalculations[2].amount,
                 progressCalculations[2].total)} %`,
              }]}
              reveal={result(progressCalculations[2].amount, progressCalculations[2].total)}
                lineWidth={20}
                animate
                label={({ dataEntry }) => dataEntry.key}
                labelStyle={{ fontSize: '1.6rem' }}
            />
            <p>
              {progressCalculations[2].amount}
              {' '}
              /
              {' '}
              {progressCalculations[2].total}
              {' '}
              Water target acheived
            </p>
          </ChartSize> */}
        {/* </ProgressStyle> */}
        {/* </MainWrap> */}
        <Footer />
      </>
    );
  // );
};

Progress.propTypes = {
  progressCalculations: PropTypes.shape({
    amount: PropTypes.number,
    total: PropTypes.number,
  }).isRequired,
  progressCal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  progressCalculations: state.waters.waters,
});

export default connect(mapStateToProps, { progressCal })(Progress);
