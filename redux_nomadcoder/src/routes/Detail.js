import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ toDos }) {
  // useParams를 이용하여 id 객체를 받을 수 있다.
  const { id } = useParams();
  // find는 하나의 element만 반납해준다.
  const toDoText = toDos.find((toDo) => toDo.id === parseInt(id));
  // ?는 toDoText가 없을때 오류가 발생하는 것을 없애준다.
  return (
    <>
      <h1>{toDoText?.text}</h1>
      <h5>createed at: {toDoText.id}</h5>
    </>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
