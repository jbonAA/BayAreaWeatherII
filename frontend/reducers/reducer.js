import { combineReducers } from 'redux';
import queryReducer from './queryReducer';
// import windReducer from './windReducer';
// import weatherReducer from './weatherReducer';

//reducers needed to deconstruct my object into store for separate components


const rootReducer = () => ({
    query: queryReducer,
    // wind: windReducer,
    // weather: weatherReducer
})

export default rootReducer