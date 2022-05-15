import {createAction, handleActions} from 'redux-actions';
import {call, delay, put, takeLatest, select, throttle} from 'redux-saga/effects';
import {HYDRATE} from "next-redux-wrapper"
import axios from 'axios'

// const SERVER = 'http://127.0.0.1:5000'
// const headers = {
//     "Content-Type": "application/json",
//     Authorization: "JWT fefege..."
// }
const SERVER = 'http://127.0.0.1'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege...",
    withCredentials: true
}

export const initialState = {
    dispatchinfo:'',
    isdispatched: false,
    dispatchError: null
  }


const DISPATCH_REQUEST = 'basic/DISPATCH_REQUEST';
const DISPATCH_SUCCESS = 'basic/DISPATCH_SUCCESS';
const DISPATCH_FAILURE = 'basic/DISPATCH_FAILURE';
// const EMAILDISPATCH_REQUEST = 'basic/EMAILDISPATCH_REQUEST';
// const EMAILDISPATCH_SUCCESS = 'basic/EMAILDISPATCH_SUCCESS';
// const EMAILDISPATCH_FAILURE = 'basic/EMAILDISPATCH_FAILURE';


export const dispatchRequest = createAction(DISPATCH_REQUEST, data => data)
// export const emaildispatch = createAction(EMAILDISPATCH_REQUEST, data => data)

export function* dispatchSaga() {
    yield takeLatest(DISPATCH_REQUEST, dispatch);
    // yield takeLatest(EMAILDISPATCH_REQUEST, dispatch);
}
function* dispatch(action) {
    try {
        const response = yield call(dispatchAPI, action.payload)
        console.log("response", response)
        console.log("response", response.data)
        console.log(" 회원가입 서버다녀옴: " + JSON.stringify(response.data))
        yield put({type: DISPATCH_SUCCESS, payload: response.data})
        // yield put({type: EMAILDISPATCH_SUCCESS, payload: response.data})
        // yield put(window.location.href = "/basic/scenelink")
    } catch (error) {
        yield put({type: DISPATCH_FAILURE, payload: error.message})
        // yield put({type: EMAILDISPATCH_FAILURE, payload: error.message})
    }
}

// TODO: API매핑 임시
const dispatchAPI = payload => axios.post(
    `${SERVER}/pet`,
    payload,
    {headers}
)


const dispatchReducer = handleActions({
  [HYDRATE]: (state, action) => ({
    ...state, 
    ...action.payload
  }), 

  [DISPATCH_SUCCESS]: (state, action) => ({
    ...state,
    dispatchinfo: action.payload,
    isdispatched: true,
  }),
  [DISPATCH_FAILURE]: (state, action) => ({
      ...state,
      isdispatched: false,
      dispatchError: action.payload
  }),
  // [EMAILDISPATCH_SUCCESS]: (state, action) => ({
  //   ...state,
  //   email: action.payload,
  //   isdispatched: true,
  // }),
  // [EMAILDISPATCH_FAILURE]: (state, action) => ({
  //     ...state,
  //     dispatchError: action.payload
  // }),
}, initialState)

export default dispatchReducer