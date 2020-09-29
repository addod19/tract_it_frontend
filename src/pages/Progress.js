import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PieChart } from 'react-minimal-pie-chart';
import { progressCal } from '../redux/actions/waterActions';
import Footer from './Footer';

const Progress = ({ progressCal, progress }) => {
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
                      value: 1, color: '#8ce08a', key: `${result(progress.total_amount, progress.total_water)} %`,
                    }]}
                    reveal={result(progress.total_amount, progress.total_water)}
                    lineWidth={20}
                    animate
                    className="pie-chart mb-3"
                    label={({ dataEntry }) => dataEntry.key}
                    labelStyle={{ fontSize: '1.6rem' }}
                  />
                  <p className="text-center">
                    {progress.total_amount}
                    {' '}
                    /
                    {' '}
                    {progress.total_water}
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
  progress: PropTypes.shape({
    total_amount: PropTypes.number.isRequired,
    total_water: PropTypes.number.isRequired,
  }).isRequired,
  progressCal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  progress: state.waters.progress,
});

export default connect(mapStateToProps, { progressCal })(Progress);
