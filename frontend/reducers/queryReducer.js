import {RECEIVE_QUERY} from '../actions/query_actions'

const queryReducer = (state = {}, action) => {
    let nextState;
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_QUERY:
            nextState = Object.assign({}, state);
            nextState[query] = {}
            return nextState
        default:
            return state
    }
}

export default queryReducer