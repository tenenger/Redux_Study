import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";

// mapStateToProps, mapDispatchToProps에서 가져온 state이다.
function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");
  const onChange = (e) => {
    const { value } = e.target;
    setText(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // store에 text를 배열로 추가한다.
    addToDo(text);
    setText("");
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>제출</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo}></ToDo>
        ))}
      </ul>
    </>
  );
}

// connect으로 store에 있는 data를 가져올 수 있다.
// store에서 data를 가져오려면, 함수에 store에 저장된 변수명을 적는다.
// 그리고 return으로 state를 하고. connect으로 함수를 엮는다.
function mapStateToProps(state) {
  return { toDos: state };
}

// mapDispatchToProps 함수는 dispatch를 매개변수로 받는다.
// 그리고 Props로 dispatch 함수를 보낸다.
function mapDispatchToProps(dispatch) {
  return { addToDo: (text) => dispatch(actionCreators.addToDo(text)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
