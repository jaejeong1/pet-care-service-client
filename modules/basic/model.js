import { createAction, handleActions } from 'redux-actions';
import { call, delay, put, takeLatest, select, throttle } from 'redux-saga/effects';


const SERVER = 'http://127.0.0.1:4000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege..."
}
export const initialState = {
   modelinfo: '',
   modelSelected: false,
}


const MODELSELECT = 'basic/MODELSELECT';
const MODELSELECT_FAILURE = 'basic/MODELSELECT_FAILURE';
const MODELSELECT_SUCCESS = 'basic/MODELSELECT_SUCCESS';

export const modelSelect = createAction(MODELSELECT, data => data);
// export const modelSelectFailure = createAction(MODELSELECT_FAILURE, data=> data);

export function* modelselectSaga() {
  yield takeLatest(MODELSELECT, modelselectactions);
}


function* modelselectactions(action) {
    try {
      const response = yield call(projectAPI, action.payload)
      const result = response.data
      console.log("데이터출력확인", result)
      yield put({type: MODELSELECT_SUCCESS, payload: response.data})
      yield put(window.location.href = "/basic/message")
  } catch (error) {
      yield put({type: MODELSELECT_FAILURE, payload: error.message})
  }
}

const projectAPI = payload => axios.post(
    `${SERVER}/project`, 
    payload, 
    {headers}
)

const modelselect = handleActions(
  {
  //   [MODELSELECT]: (state, action) => ({
  //     ...state,
  //     model: action.payload,
  //     modelSelected: true
  // }),

  [MODELSELECT_SUCCESS]: (state, action) => ({
    ...state,
    modelinfo: action.payload,
    modelSelected: true
  }),

  [MODELSELECT_FAILURE]: (state, action) => ({
    ...state,
    modelSelected: false
  }),
  },
  initialState
);

export default modelselect;