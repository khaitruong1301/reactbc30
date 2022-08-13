import { combineReducers, createStore } from 'redux';
import { demoGioHangReducer } from './reducers/demoGioHangReducer';
import { imgCarReducer } from './reducers/imgCarReducer';
import { numberReducer } from './reducers/numberReducer';
import { qlsvReducer } from './reducers/qlsvReducer';

//rootReducer: state tổng của ứng dụng
const rootReducer = combineReducers({
    number: numberReducer,
    imgCar: imgCarReducer,
    qlsvReducer,
    demoGioHangReducer:demoGioHangReducer
    //object literal
    //stateA,....

});

/*
    state = {
        number:1
    }

*/

export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());