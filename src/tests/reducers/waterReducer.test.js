import movies from '../../redux/reducers/water';

describe('water reducer', () => {
  const initialState = {
    water: [],
    loading: false,
  };
  test('should return the initial state', () => {
    expect(movies(undefined, {})).toEqual(initialState);
  });
});
