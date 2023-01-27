const INITIAL_STATE = {
  user: {},
  friendRequest: '',
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
        friendRequest: '',
      };
    default:
      return state;
  }
};
