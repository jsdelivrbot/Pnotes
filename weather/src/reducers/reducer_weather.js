import { FETCH_WEATHER } from "../actions/index";

export default function (state = [], action) { // here we actually should consume the promise 
  // but since we have imported redux-promise middleware, it's going to automatically stop the action
  // before it's sent to the reducers and check whether it contains a promise or not, if it does
  // it consumes that promise and sends the date to the reducers 
  switch (action.type) {
    case FETCH_WEATHER:

      // return state.push(action.payload.data) dont ever modify (change,manipulate) the state manually always return a new one 
      // return state.concat([action.payload.data]); // this is okay because it returns an new array (state)
      return [action.payload.data, ...state];
    // using the spread operator, it gives u back an array which
    // starts with action.payload.data
  }
  return state;
}
