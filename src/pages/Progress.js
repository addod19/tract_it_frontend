import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PieChart } from 'react-minimal-pie-chart';
import { progressCal } from '../redux/actions/waterActions';
import Footer from './Footer';

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
      <div>
        Progress Data
      </div>
      <div>
        <main>
          <div className="text-center">
            <div>
              <div>
                <div>
                  <PieChart
                    data={[{
                      value: 1, color: '#8ce08a', key: `${result(progress_calculations.total_amount,
                        progress_calculations.total_water)} %`,
                    }]}
                    reveal={result(progress_calculations.total_amount, progress_calculations.total_water)}
                    lineWidth={20}
                    animate
                    label={({ dataEntry }) => dataEntry.key}
                    labelStyle={{ fontSize: '1.6rem' }}
                  />
                  <p className="text-center">
                    {progress_calculations.total_amount}
                    {' '}
                    /
                    {' '}
                    {progress_calculations.total_water}
                    {' '}
                    Water target acheived
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

Progress.propTypes = {
  progress_calculations: PropTypes.shape({
    total_amount: PropTypes.number.isRequired,
    total_water: PropTypes.number.isRequired,
  }).isRequired,
  progressCal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  progress_calculations: state.waters.progress_calculations,
});

export default connect(mapStateToProps, { progressCal })(Progress);
