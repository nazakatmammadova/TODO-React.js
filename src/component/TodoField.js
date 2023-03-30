import React, { useState,useRef } from "react";
import { v4 as uuidv4 } from "uuid";
const TodoField = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const inpRef=useRef();
  const handleClick = () =>{
    addTodo({
        id: uuidv4(),
        name: value,
        status: false,
      })
      setValue("");
      inpRef.current.focus();
  }
  return (
    <div className="todoField">
      <input
        ref={inpRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="todoField_inp"
      />
      <button
        onClick={() =>
         handleClick()
        }
        className="todoField_btn"
      >
        add
      </button>
    </div>
  );
};

export default TodoField;
