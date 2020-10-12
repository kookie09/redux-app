export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUB = 'SUB';
export const STORE = 'STORE';
export const DELETE = 'DELETE';


export const increment = () => {
    return {
        type: INCREMENT
    };
};
export const decrement = () => {
    return {
        type: DECREMENT
    };
};
export const add = (value) => {
    return {
        type: ADD,
        value: value
    };
};
export const subtract = (value) => {
    return {
        type: SUB,
        value: value
    };
};

export const saveResult = (res) => {
   return  {
        type: STORE,
        counter: res
    };
}

export const storeResult = (res) => {

    return (dispatch) => {
        setTimeout(() => {
            dispatch(saveResult(res));
        }, 2000);
    }
};

export const deleteResult = (index) => {
    return {
        type: DELETE,
        value: index
    };
};
