import {createAction, handleActions} from 'redux-actions';
import {call, delay, put, takeLatest, select, throttle} from 'redux-saga/effects';
import {HYDRATE} from "next-redux-wrapper"
import axios from 'axios'



const SERVER = 'http://127.0.0.1'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege...",
    withCredentials: true
}


const initialState = {
	link: '',
  linkError: false
};

const SCENELINK_REQUEST = 'basic/SCENELINK_REQUEST';
const SCENELINK_SUCCESS = 'basic/SCENELINK_SUCCESS';
const SCENELINK_FAILURE = 'basic/SCENELINK_FAILURE';

export const scenelinkRequest = createAction(SCENELINK_REQUEST)

export function* linkRequestSaga() {
  yield take(SCENELINK_REQUEST, linkRequest);
};

function* linkRequest(action) {
  try {
      const response = yield call(linkrequestAPI)
      console.log("response", response)
      console.log("response", response.data)
      yield put({type: SCENELINK_SUCCESS, payload: response.data})
     
  } catch (error) {
      yield put({type:SCENELINK_FAILURE, payload: error.message})
  }
}


// TODO: API매핑 임시
const linkrequestAPI = payload => axios.get(
  `${SERVER}/pet`,
  {},
  {headers}
)


const linkRequestReducer = handleActions({
  [HYDRATE]: (state, action) => ({
    ...state, 
    ...action.payload
  }), 

  [SCENELINK_SUCCESS]: (state, action) => ({
    ...state,
    link: action.payload,

  }),
  [SCENELINK_FAILURE]: (state, action) => ({
      ...state,
      linkError: true
  }),
}, initialState)

export default linkRequestReducer
