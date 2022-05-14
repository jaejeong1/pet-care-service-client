import { createAction, handleActions } from 'redux-actions';
import { delay, put, takeLatest, select, throttle } from 'redux-saga/effects';



//TODO: 작업진행중, 미완성
const SERVER = 'http://127.0.0.1:4000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege...",
    withCredentials: true 
}



// 액션 타입
// TODO: 1차 테스트 후, 놀이,감정 추가
const FOOD1 = 'message/food1';
const FOOD2 = 'message/food2';
const FOOD3 = 'message/food3';
const SAVE_TOKEN = 'message/SAVE_TOKEN';
// const DECREASE = 'counter/DECREASE';
// const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
// const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';


// 액션 생성 함수
export const food1 = createAction(FOOD1);
export const food2 = createAction(FOOD2);
export const food3 = createAction(FOOD2);

// 마우스 클릭 이벤트가 payload 안에 들어가지 않도록 () => undefined 를 두번째 파라미터로 넣어줍니다.
// TODO: 이건뭔지 모르겠다.. 여기서 필요한건가?
// export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
// export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);


// 사가와쳐
function* food1Saga(action) {
  try {
      const response = yield call(sceneAPI, action.payload)
      const result = response
          .data
          console.log("scene 서버다녀옴: " + JSON.stringify(result))
      yield put({type: FOOD1, payload: result})
      yield put({type: SAVE_TOKEN, payload: result.token})
      
  } catch (error) {
        window.alert("다시 입력해주세요");
        console.log(`error`);
  }
}

function* food2Saga(action) {
  try {
      const response = yield call(sceneAPI, action.payload)
      const result = response
          .data
          console.log("scene 서버다녀옴: " + JSON.stringify(result))
      yield put({type: FOOD2, payload: result})
      yield put({type: SAVE_TOKEN, payload: result.token})
      
  } catch (error) {
        window.alert("다시 입력해주세요");
        console.log(`error`);
  }
}

function* food3Saga(action) {
  try {
      const response = yield call(sceneAPI, action.payload)
      const result = response
          .data
          console.log("scene 서버다녀옴: " + JSON.stringify(result))
      yield put({type: FOOD3, payload: result})
      yield put({type: SAVE_TOKEN, payload: result.token})
      
  } catch (error) {
        window.alert("다시 입력해주세요");
        console.log(`error`);
  }
}

// function* food1Saga() {
//   yield delay(100); // 1초를 기다립니다.
//   yield put(food1()); // 특정 액션을 디스패치 합니다.
//   const food1 = yield select(state => state.counter);
//   console.log(`현재 값은 ${Food1}입니다.`);
// }

// function* food2Saga() {
//   yield delay(100); // 1초를 기다립니다.
//   yield put(food2()); // 특정 액션을 디스패치 합니다.
//   const food2 = yield select(state => state.counter);
//   console.log(`현재 값은 ${food2}입니다.`);
// }

// function* food3Saga() {
//   yield delay(100); // 1초를 기다립니다.
//   yield put(food3()); // 특정 액션을 디스패치 합니다.
//   const food3 = yield select(state => state.counter);
//   console.log(`현재 값은 ${food3}입니다.`);
// }

// API
const sceneAPI = payload => axios.post(
  `${SERVER}/scene`,
  payload,
  {headers}
)

export function* messageSaga1() {
  yield takeLatest(FOOD1, food1Saga);
  yield takeLatest(FOOD2, food2Saga);
  yield takeLatest(FOOD3, food3Saga);
}

// export function* menuSaga1() {
//   // takeEvery 는 들어오는 모든 액션에 대하여 특정 작업을 처리해줍니다.
//   // yield takeEvery(INCREASE_ASYNC, increaseSaga);
//   // 첫번째 파라미터: n초 * 1000
//   yield throttle(700, INCREASE_ASYNC, increaseSaga);
//   // takeLatest 는 만약 기존에 진행중이던 작업이 있다면 취소처리 하고
//   // 가장 마지막으로 실행된 작업만을 수행합니다.
//   yield takeLatest(DECREASE_ASYNC, decreaseSaga);
// }


// TODO: 초기값 어떻게 주지?
export const initialState = {
  message: '',
  token: '',
};

// 리듀서
const messageReducer = handleActions(
  {

  
    [FOOD1]: (state, action) => ({
      ...state,
      message: action.payload,
      token: action.payload
    }),
    [FOOD2]: (state, action) => ({
      ...state,
      message: action.payload,
      token: action.payload
    }),
    [FOOD3]: (state, action) => ({
      ...state,
      message: action.payload,
      token: action.payload
    }),
  },
  initialState
);

export default messageReducer;