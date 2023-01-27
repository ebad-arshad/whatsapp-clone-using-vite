const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CHAT_SCREEN_UID':
            return {
                friendUID: action.uid,
            };
        default:
            return state;
    }
};
