import React from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList(props) {
  return (
    <>
      <div>
        {props.list.map((item) => {
          return (
            <ToDoItem
              key={item.id}
              id={item.id}
              text={item.text}
              completed={item.completed}
              setList={props.setList}
            />
          );
        })}
      </div>
    </>
  );
}
