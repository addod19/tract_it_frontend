const initialState = {
  loggedIn: false,
  user: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  console.log(action);
  switch (type) {
    case 'SET_USER':
      return {
        loggedIn: true,
        user: { ...payload.user },
      };
    case 'SIGN_OUT':
      localStorage.clear();
      return {
        loggedIn: false,
        user: {},
      };
    default:
      return state;
  }
}
