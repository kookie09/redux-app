const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ("INCREMENT"):
            return {
                ...state,
                counter: state.counter + 1
            }
        case ("DECREMENT"):
            return {
                ...state,
                counter: state.counter - 1
            }
        case ("ADD"):
            return {
                ...state,
                counter: state.counter + action.value
            }
        case ("SUB"):
            return {
                ...state,
                counter: state.counter - action.value
            }
            case("STORE"):
            const newResult = [...state.results];
            return {
                ...state,
                results : newResult.push(state.counter)
            }
    }

    return state;
};

export default reducer;