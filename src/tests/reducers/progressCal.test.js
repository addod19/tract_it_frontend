import progress from '../../redux/reducers/progressCalculations';

describe('progress reducer', () => {
  const initialState = {
    progress_calculations: {},
    loading: false,
  };
  test('should return the initial state', () => {
    expect(progress(undefined, {})).toEqual(initialState);
  });
});
