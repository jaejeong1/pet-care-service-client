import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import model, { modelselectSaga } from './basic/model';
import message, { messageSaga } from './basic/message';
import register, { registerSaga } from './auth/register';
import login, { loginSaga } from './auth/login';
import dispatch, { dispatchSaga } from './basic/send';
import linkRequest, { linkRequestSaga } from './basic/scenelink';
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
    message,
    dispatch,
    linkRequest,
    login,
    register,
});
export function* rootSaga() {
  yield all([modelselectSaga(), dispatchSaga(), messageSaga(), linkRequestSaga(), registerSaga(), loginSaga()]);
}

export default rootReducer;