import React, { useState } from "react";

export default function ToDoInput(props) {
  const [inputText, setInputText] = useState("");
  return (
    <>
      <div>
        <input
          value={inputText}
          onChange={(event) => {
            setInputText(event.target.value);
          }}
        />
        <button
          onClick={() => {
            props.setList((prevList) => {
              return [...prevList, inputText];
            });
            setInputText("");
          }}
        >
          Add
        </button>
      </div>
    </>
  );
}
