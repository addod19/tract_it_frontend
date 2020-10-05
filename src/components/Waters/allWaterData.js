import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PieChart } from 'react-minimal-pie-chart';
import { getWaters } from '../../redux/actions/waterActions';

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
    <div key={water.id}>
      <div>
        <div>
          <PieChart
            data={[{
              value: 1, color: '#8ce08a', key: `${result(water.amount, water.total)} %`,
            }]}
            reveal={result(water.amount, water.total)}
            lineWidth={20}
            animate
            label={({ dataEntry }) => dataEntry.key}
          />
          <h5>{water.amount}</h5>
          <Link
            to={{ pathname: `/waters/:${water.id}` }}
          >
            View All Water
          </Link>
        </div>
      </div>
    </div>
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
      <div>
        Track Water Intake
      </div>
      <div>
        <div>
          {waters.length > 0 ? allStacks : noWaterData}
        </div>
      </div>
    </>
  ) : <h2>Loading........</h2>;
};

AllWater.propTypes = {
  getWaters: PropTypes.func.isRequired,
  waters: PropTypes.shape([]).isRequired,
};

const mapStateToProps = state => ({
  waters: state.waters,
});

export default connect(mapStateToProps, { getWaters })(AllWater);
