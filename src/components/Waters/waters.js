/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { PieChart } from 'react-minimal-pie-chart';
import Footer from '../../gages/Footer';
import { getWater, deleteWater } from '../../redux/actions/movieActions';

const Water = ({
  getWater, waters, match, deleteWater, history,
}) => {
  const { id } = match.params;
  useEffect(() => {
    getWater(id);
  }, [getWater, id]);

  const result = (amount, total) => {
    if (total === 0) {
      return 100;
    }
    const percentage = (amount / total) * 100;
    return percentage >= 100 ? 100 : Math.round(percentage);
  };

  const handleDelete = e => {
    e.preventDefault();
    deleteWater(id, history);
  };

  return waters ? (
    <div>
      <div>
        <div>
          <div>
            <PieChart
              data={[{
                value: 1, color: '#8ce08a', key: `${result(waters.amount, waters.total)} %`,
              }]}
              reveal={result(waters.amount, waters.total)}
              lineWidth={20}
              animate
              className="pie-chart"
              label={({ dataEntry }) => dataEntry.key}
              labelStyle={{ fontSize: '1.6rem' }}
            />
            <p className="mt-2">Water Data</p>
          </div>
        </div>
        <div>
          <div>
            <Link to="/water" className="btn btn-lg custom-button mb-3">
              Back to Data
            </Link>
            <Link
              to={`/edit/${waters.id}`}
              className="btn btn-lg custom-button mb-3"
              role="button"
            >
              Edit Water
            </Link>
            <button onClick={handleDelete} type="button" className="btn btn-lg custom-button delete-btn">
              Delete Water
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ) : <h1>Loading........</h1>;
};

Water.propTypes = {
  getWater: PropTypes.func.isRequired,
  deleteWater: PropTypes.func.isRequired,
  waters: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  waters: state.waters.water,
});

export default connect(mapStateToProps, { getWater, deleteWater })(withRouter(Water));
