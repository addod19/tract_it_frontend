import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PieChart } from 'react-minimal-pie-chart';
import progressCal from '../redux/actions/progressActions';
// import Footer from './Footer';

import styled from 'styled-components';

const MainWrap = styled.main`
  height: 700px;
  width: 100%;
  border: 1px solid red;
  display: flex;
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
    <MainWrap>
        Progress Data
      {/* <div> */}
        <main>
          <div>
            {/* <div>
              <div> */}
                <div>
                  <PieChart
                    // data={[{
                    //   value: 1, color: '#8ce08a', key: `${result(progress_calculations.amount,
                    //     progress_calculations.total)} %`,
                    // }]}
                    // reveal={result(progress_calculations.amount, progress_calculations.total)}
                    // lineWidth={20}
                    // animate
                    // label={({ dataEntry }) => dataEntry.key}
                    // labelStyle={{ fontSize: '1.6rem' }}
                  />
                  <p className="text-center">
                    {/* {progress_calculations.amount} */}
                    {' '}
                    /
                    {' '}
                    {/* {progress_calculations.total} */}
                    {' '}
                    Water target acheived
                  </p>
                </div>
              {/* </div>
            </div> */}
          </div>
        </main>
      {/* </div> */}
      {/* <Footer /> */}
    </MainWrap>
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
  progress_calculations: state.waters.progress_calculations,
});

const mapDispatchToProps = dispatch => {
  return {
    progressCal: () => dispatch(progressCal()),
  }
  // dispatch({

  // })
}

export default connect(mapStateToProps, mapDispatchToProps)(Progress);
