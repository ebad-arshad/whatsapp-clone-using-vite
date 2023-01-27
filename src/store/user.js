const INITIAL_STATE = {
  user: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'HASLOGGEDIN':
      return {
        ...state,
        user: JSON.parse(action.userDB),
      }
    case 'NOTLOGGEDIN':
      return {
        user: {},
      };
    default:
      return state;
  }
};
