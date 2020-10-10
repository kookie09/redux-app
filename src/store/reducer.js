import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUB:
            return {
                ...state,
                counter: state.counter - action.value
            }
            case actionTypes.STORE:
            return {
                ...state,
                results : state.results.concat(state.counter)
            }
            case actionTypes.DELETE:
            return {
                ...state,
                results: state.results.filter((item) => item !== state.results[action.value])
            }
    }

    return state;
};

export default reducer;