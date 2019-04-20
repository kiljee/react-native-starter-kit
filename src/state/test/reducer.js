// @flow

import * as actions from "./actions";
import initialState from "./initialState";

type ActionT = {
    type: String,
    payload: any
};

export default (state: * = initialState(), action: ActionT) => {
    const { type, payload } = action;
    switch (type) {
        case actions.SET_NUMBER: {
            return {
                ...state,
                number: payload
            };
        }
        default:
            return state;
    }
};
