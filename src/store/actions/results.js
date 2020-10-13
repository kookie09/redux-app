import * as actionTypes from './actionsTypes';

export const saveResult = (res) => {
    return  {
         type: actionTypes.STORE,
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
         type: actionTypes.DELETE,
         value: index
     };
 };
 