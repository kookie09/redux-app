import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE:
            return updateObject(state, { results: state.results.concat(action.counter) });

        case actionTypes.DELETE:
            return updateObject(state, { results: state.results.filter((item) => item !== state.results[action.value]) });
    }

    return state;
};

export default reducer;