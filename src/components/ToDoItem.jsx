import React from "react";

export default function ToDoItem(props) {
  const textDecoration = props.completed ? "line-through" : "none";
  return (
    <>
      <div>
        <span
          onClick={() => {
            props.setList((prevList) => {
              const newList = [...prevList];
              const itemToUpdateIndex = newList.findIndex((item) => {
                return item.id === props.id;
              });
              const newObject = {
                ...newList[itemToUpdateIndex],
              };
              newObject.completed = !newObject.completed;
              newList[itemToUpdateIndex] = newObject;
              return newList;
            });
          }}
          style={{ textDecoration: textDecoration }}
        >
          {props.text}
        </span>
        <button
          onClick={() => {
            props.setList((prevList) => {
              const newList = [...prevList];
              const itemToDeleteIndex = newList.findIndex((item) => {
                return item.id === props.id;
              });
              newList.splice(itemToDeleteIndex, 1);
              return newList;
            });
          }}
        >
          Delete/Remove
        </button>
      </div>
    </>
  );
}
