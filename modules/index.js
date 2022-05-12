import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import model, { modelselectSaga } from './basic/model';
import register, { registerSaga } from './auth/register';
import login, { loginSaga } from './auth/login';
import {HYDRATE} from "next-redux-wrapper"
const rootReducer = combineReducers({
    index: (state = {}, action) => {
        switch (action.type) {
            case HYDRATE:
                console.log("HYDRATE", action);
                return { ...state, ...action.payload };
            default:
                return state;
        }
    },
    model,
    login,
    register,
});
export function* rootSaga() {
  yield all([modelselectSaga(), messageReducer(), registerSaga(), loginSaga()]);
}

export default rootReducer;