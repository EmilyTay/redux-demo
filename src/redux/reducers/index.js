import { TOGGLE_LOGIN } from "../constants/action-types";

const initialState = {
    isLoggedIn: false
};

function rootReducer(state = initialState, action) {
    if (action.type === TOGGLE_LOGIN) {
        return Object.assign({}, state, {
            isLoggedIn: !state.isLoggedIn
        });
    }
    return state;
};

export default rootReducer;
