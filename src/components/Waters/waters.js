/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { PieChart } from 'react-minimal-pie-chart';
import Footer from '../../pages/Footer';
import { getWater, deleteWater } from '../../redux/actions/waterActions';

import styled from 'styled-components';

const MainWrap = styled.div`
  width: 100%;
  height: 471px;
  background-color: #51adcf;
`;

const LoadingWrap = styled.div`
  height: 450px;
  width: 100%;
`;

const DeleteB = styled.button`
  color: white;
  background-color: blue;
  width: 150px;
  border: none;
  &:hover {
    opacity: .6;
  }
`;

const DFlex = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 10px;
  margin-left: 25%;

  @media(max-width: 768px) {
    margin-left: 0;
    width:100%;
  }
`;

const TextA = styled.p`
  text-align: center;
`;

const ChartPos = styled.div`
  margin-left: 260px;
  @media(max-width: 768px) {
    margin-left: 35%;
  }
`;

const LinkPos = styled.div`
  margin-left: 160px;
  @media(max-width: 768px) {
    margin-left: 20%;
  }
`;

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
    <>
      <MainWrap>
        <TextA>Water Data</TextA>
        <DFlex>
          <ChartPos>
            <PieChart className="cSize"
              data={[{
                value: 1, color: '#1F3C88', key: `${result(waters.amount, waters.total)} %`,
              }]}
              reveal={result(waters.amount, waters.total)}
              lineWidth={20}
              animate
              label={({ dataEntry }) => dataEntry.key}
              labelStyle={{ fontSize: '1.6rem' }}
            />
          </ChartPos>
          <LinkPos>
            <Link to="/waters">
              Back to Data
            </Link>
            <Link className="edit"
              to={`/waters/${id}`}
              role="button"
            >
              Edit Water
            </Link>
            <DeleteB onClick={handleDelete} type="button">
              Delete Water
            </DeleteB>
          </LinkPos>
        </DFlex>
      </MainWrap>
      <Footer />
     </>
  ) : <LoadingWrap>
      <h1>Loading........</h1>
    </LoadingWrap>;
};

Water.propTypes = {
  getWater: PropTypes.func.isRequired,
  deleteWater: PropTypes.func.isRequired,
  waters: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  waters: state.waters  ,
});

export default connect(mapStateToProps, { getWater, deleteWater })(withRouter(Water));
