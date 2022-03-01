import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

// reducer는 state와 state를 변경하는 action을 가진다.
// actiom은 행동으로, dispatch를 통해 행위를 받는다. action은 {객체}만 받는다.
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

// 1. store를 생성한다.
// data를 저장하는 store는 import한 createStore함수로 정의한다.
// creteStore는 reducer라는 함수를 가진다.
const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

// 2. store를 import할 수 있게 내보낸다.
export default store;
