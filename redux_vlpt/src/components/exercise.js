// createStore는 store를 만들어주는 함수이다.
import { createStore } from "redux";

// 초기 상태를 선언한다.
const initialState = { counter: 0, text: "", list: [] };

// 액션 타입 정의, 주로 대문자로 선언한다.
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const ADD_TO_LIST = "ADD_TO_LIST";
const CHANGE_TEXT = "CHANGE_TEXT";

// 액션 생성함수 선언, 주로 camelCase로 작성
const increase = () => {
  return { type: INCREASE };
};

const decrease = () => {
  return { type: DECREASE };
};
const addToList = (item) => {
  return {
    type: ADD_TO_LIST,
    item,
  };
};
const changeText = (text) => {
  return {
    type: CHANGE_TEXT,
    text,
  };
};

// 액션 생성함수로 만들어진 action을 참조하여, 새로운 상태를 만드는 리듀서 함수이다.
function reducer(state = initialState, action) {
  switch (action.type) {
    // action.type이 INCREASE이면, ...state를 복사하고, counter는 state.counter + 1값인 새로운 상태를 만들어내어 반환한다.
    case INCREASE:
      return { ...state, counter: state.counter + 1 };
    case DECREASE:
      return { ...state, counter: state.counter - 1 };
    case ADD_TO_LIST:
      return { ...state, list: state.list.concat(action.item) };
    case CHANGE_TEXT:
      return { ...state, text: action.text };
    default:
      return state;
  }
}
/* 여기까지 리덕스 모듈로, modules폴더안에 하나의 파일로 존재한다. */

/* 
src/index.js파일에 store를 정의한다. 

만약 reducer가 2개 이상일 경우에는 modules폴더에 index.js파일로 rootReducer를 정의하여  src/index.js파일에 store를 정의한다.
*/
// store를 만든다. createStore는 reducer를 매개변수로 받는다.
const store = createStore(reducer);

const listener = () => {
  const state = store.getState();
  console.log(state);
};
const unsubscribe = store.subscribe(listener);

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("안녕하세요"));
store.dispatch(addToList({ id: 1, text: "와우" }));
