import waters from '../../redux/reducers/waters';

describe('waters reducer', () => {
  const initialState = {
    waters: [],
    loading: false,
  };
  test('should return the initial state', () => {
    expect(waters(undefined, {})).toEqual(initialState);
  });
});
