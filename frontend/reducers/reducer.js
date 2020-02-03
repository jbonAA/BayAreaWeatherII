import { combineReducers } from 'redux';

import windReducer from './windReducer';
import weatherReducer from './weatherReducer';

//reducers needed to deconstruct my object into store for separate components


const rootReducer = () => ({
    wind: windReducer,
    weather: weatherReducer
})

export default rootReducer