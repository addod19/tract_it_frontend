import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PieChart } from 'react-minimal-pie-chart';
import { getWaters } from '../../redux/actions/movieActions';

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

  const allStacks = all_water.map(water => (
    <div key={water.id}>
      <div>
        <div>
          <PieChart
            data={[{
              value: 1, color: '#8ce08a', key: `${result(water.amount, water.amount, water.total)} %`,
            }]}
            reveal={result(water.amount, water.amount, water.total)}
            lineWidth={20}
            animate
            label={({ dataEntry }) => dataEntry.key}
          />
          <h5 >{water.amount}</h5>
          <Link
            to={{ pathname: `/all_water/${water.id}` }}
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

  return all_water ? (
    <>
      <div>
        Track Water Intake
      </div>
      <div>
        <div>
            {all_water.length > 0 ? allStacks : noWaterData}
        </div>
      </div>
    </>
  ) : <h2>Loading........</h2>;
};

AllWater.propTypes = {
  getWaters: PropTypes.func.isRequired,
  all_water: PropTypes.shape([]).isRequired,
};

const mapStateToProps = state => ({
  all_water: state.waters,
});

export default connect(mapStateToProps, { getWaters })(AllWater);