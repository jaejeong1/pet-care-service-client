import { createAction, handleActions } from 'redux-actions';
import { delay, put, takeLatest, select, throttle } from 'redux-saga/effects';


const SERVER = 'http://127.0.0.1:4000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege..."
}
export const initialState = {
   model: '',
   modelSelected: false,
}


const MODELSELECT1 = 'model/MODELSELECT1';
const MODELSELECT_FAILURE = 'model/MODELSELECT1_FAILURE';


export const modelselect1 = createAction(MODELSELECT1, data=>data);

export function* modelselectSaga() {
  yield takeLatest(MODELSELECT1, modelSelectActions);
}


function* modelSelectActions(action) {
    try {
      const response = yield call(modelAPI, action.payload)

      yield put({type: MODELSELECT1, payload: response.data})
      yield put(window.location.href = "/basic/message")
  } catch (error) {
      yield put({type: MODELSELECT1_FAILURE, payload: error.message})
  }
}

const modelAPI = payload => axios.post(
    `${SERVER}/project`, 
    payload, 
    {headers}
)

const modelselect = handleActions(
  {
    [MODELSELECT1]: (state, action) => ({
      ...state,
      model: action.payload,
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