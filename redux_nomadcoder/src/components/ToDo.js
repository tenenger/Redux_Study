import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

function ToDo({ text, onBtnClick, id }) {
  return (
    <li>
      {/* 밑의 코드로 <li>에 링크가 달리고, 링크의 url은 id값을 가진다. */}
      <Link to={`/${id}`}>
        {text} <button onClick={onBtnClick}>삭제</button>
      </Link>
    </li>
  );
}

//
function mapDispatchToProps(dispatch, ownProps) {
  return {
    //   onBtnClick는 의미없는 키이다.
    //
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
