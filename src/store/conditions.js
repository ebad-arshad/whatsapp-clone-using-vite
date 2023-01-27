const INITIAL_STATE = {
  isAddFriendTab: false,
  isFriendReqTab: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADDFRIENDTOGGLE':
      return {
        ...state,
        isAddFriendTab: action.bool,
      }
    case 'FRIENDREQTOGGLE':
      return {
        ...state,
        isFriendReqTab: action.bool,
      }
    default:
      return state;
  }
};
