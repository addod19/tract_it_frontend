import auth from '../../redux/reducers/auth';

describe('auth reducer', () => {
  const initialState = {
    loggedIn: false,
    user: {},
  };
  test('should return the initial state', () => {
    expect(auth(undefined, {})).toEqual(initialState);
  });
});
