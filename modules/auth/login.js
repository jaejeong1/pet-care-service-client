import {createAction, handleActions} from 'redux-actions';
import {
    call,
    delay,
    put,
    takeLatest,
    select,
    throttle
} from 'redux-saga/effects';
import {HYDRATE} from "next-redux-wrapper"
import axios from 'axios'
import { createBrowserHistory } from 'history'


const SERVER = 'http://127.0.0.1:4000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege...",
    withCredentials: true 
}
export const initialState = {
    loginUser: null,
    isLoggined: false,
    token: '',
    loginError: null
}

const LOGIN_REQUEST = 'auth/LOGIN_REQUEST';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';
const LOGIN_CANCELLED = 'auth/LOGIN_CANCELLED';
const LOGOUT_REQUEST = 'auth/LOGOUT_REQUEST';
const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';
const LOGOUT_FAILURE = 'auth/LOGOUT_FAILURE';
const SAVE_TOKEN = 'auth/SAVE_TOKEN';
const DELETE_TOKEN = 'auth/DELETEE_TOKEN';

export const loginRequest = createAction(LOGIN_REQUEST, data => data)
export const loginCancelled = createAction(LOGIN_CANCELLED, data => data)
export const logoutRequest = createAction(LOGOUT_REQUEST)

export function* loginSaga() {
    yield takeLatest(LOGIN_REQUEST, signin);
    yield takeLatest(LOGIN_CANCELLED, loginCancel);
    yield takeLatest(LOGOUT_REQUEST, logout);
}

function* signin(action) {
    try {
        const response = yield call(loginAPI, action.payload)
        const result = response
            .data
            console.log(" 로그인 서버다녀옴: " + JSON.stringify(result))
        yield put({type: LOGIN_SUCCESS, payload: result})
        yield put({type: SAVE_TOKEN, payload: result.token})
        
    } catch (error) {
        yield put({type: LOGIN_FAILURE, payload: error.message})
    }
}
const loginAPI = payload => axios.post(
    `${SERVER}/user/login`,
    payload,
    {headers}
)

const logoutAPI = payload => axios.get(
    `${SERVER}/user/logout`,
    {},
    {headers}
)

function* logout(){
    try{
        console.log(' logout 실행중 ')
        const response = yield call(logoutAPI)
        console.log(` 로그아웃 성공: ${response.data.message}`)
        yield put({type: LOGOUT_SUCCESS})
        yield put({type: DELETE_TOKEN})
        // yield put(window.location.href= "/")
    }catch(error){
        console.log(` 로그아웃 실패: ${error}`)
        yield put({type: LOGOUT_FAILURE})
    }
}

function* loginCancel() {
    try {
        console.log(`로그인 취소`)
    } catch (error) {}
}

const login = handleActions({
    [HYDRATE]: (state, action) => ({
        ...state,
        ...action.payload
    }),
    [LOGIN_SUCCESS]: (state, action) => ({
        ...state,
        loginUser: action.payload,
        isLoggined: true
    }),
    [LOGIN_FAILURE]: (state, action) => ({
        ...state,
        loginError: action.payload
    }),
    [SAVE_TOKEN]: (state, action) => ({
        ...state,
        token: action.payload
    }),
    [DELETE_TOKEN]: (state, _action) => ({
        ...state,
        token: ''
    }),
    [LOGOUT_SUCCESS]: (state, _action) => ({
        ...state,
        loginUser: null,
        isLoggined: false
    }),
    [LOGOUT_FAILURE]: (state, _action) => ({
        ...state,
        loginUser: action.payload,
        isLoggined: true
    }),
}, initialState)

export default login