import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PieChart } from 'react-minimal-pie-chart';
import progressCal from '../redux/actions/progressActions';

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
        <main>
          <div>
            {console.log(progress_calculations)}
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
          </div>
        </main>
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
  progress_calculations: state.waters,
});

export default connect(mapStateToProps, { progressCal })(Progress);
