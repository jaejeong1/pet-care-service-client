import { createAction, handleActions } from 'redux-actions';
import { delay, put, takeLatest, select, throttle } from 'redux-saga/effects';
import {HYDRATE} from "next-redux-wrapper"
import axios from 'axios'

//TODO: 작업진행중
const SERVER = 'http://127.0.0.1:4000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege...",
    withCredentials: true 
}

export const initialState = {
  scene: '',
  appId: 'dev.aistudios.com',
  clientHostname: 'dev.aistudios.com',
  userKey: '6443234b-77d5-4013-bfd6-bb9399f317d9',
  uuid: '6443234b-77d5-4013-bfd6-bb9399f317d9',
  token: '',
  isregistered: false
}


// const FOOD_REGISTER = 'basic/FOOD_REGISTER';
// const PLAY_REGISTER= 'basic/PLAY_REGISTER';
// const EMOTION_REGISTER = 'basic/EMOTION_REGISTER';
// const TEXT_ENROLL = 'basic/TEXT_ENROLL';
const SCENE_REGISTER = 'basic/SCENE_REGISTER';
const REGISTER_SUCCESS = 'basic/REGISTER_SUCCESS';
const REGISTER_FAILURE = 'basic/REGISTER_FAILURE';
const SAVE_TOKEN = 'basic/SAVE_TOKEN';
const DELETE_TOKEN = 'basic/DELETE_TOKEN';


export const sceneRegister = createAction(SCENE_REGISTER, data=> data);
// export const playregister = createAction(PLAY_REGISTER, data=> data);
// export const emotionregister = createAction(EMOTION_REGISTER, data=> data);
// export const textenroll = createAction(TEXT_ENROLL, data=> data);


export function* registerSaga() {
  yield takeLatest(FOOD_REGISTER, register);
  yield takeLatest(PLAY_REGISTER, register);
  yield takeLatest(EMOTION_REGISTER, register);
  yield takeLatest(TEXT_ENROLL, register);
}


function* register(action) {
  try {
      const response = yield call(sceneAPI, action.payload)
      const result = response.data
      yield put({type: REGISTER_SUCCESS, payload: result})
      yield put({type: SAVE_TOKEN, payload: result.token})
      
  } catch (error) {
      yield put({type: REGISTER_FAILURE, payload: error.message})
  }
}



const sceneAPI = payload => axios.post(
  `${SERVER}/scene`,
  payload,
  {headers}
)


const messageReducer = handleActions({
    [HYDRATE]: (state, action) => ({
      ...state,
      ...action.payload
    }),
  
    [REGISTER_SUCCESS]: (state, action) => ({
      ...state,
      scene: action.payload,
      isregistered: true
    }),
    [REGISTER_FAILURE]: (state, action) => ({
      ...state,
      isregistered: false
    }),
    [SAVE_TOKEN]: (state, action) => ({
      ...state,
      token: action.payload
    }),
    [DELETE_TOKEN]: (state, action) => ({
      ...state,
      token:''
    }),
  },
  initialState
);

export default messageReducer;