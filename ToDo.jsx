import React from "react";
const ToDo = (props) => {
  console.log(props);
  return (
    <>
      <div className="todo_style">
        <i
          onClick={() => {
            props.onSelect(props.id);
          }}
          className="fa fa-times"
          aria-hidden="true"
        ></i>
        <li>{props.text}</li>
      </div>
    </>
  );
};
export default ToDo;
