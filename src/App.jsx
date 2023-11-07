import { useState } from "react";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

function App() {
  const [list, setList] = useState([
    { id: "1", text: "Do dishes", completed: false },
    { id: "2", text: "Do dishes2", completed: false },
    { id: "3", text: "Do dishes3", completed: false },
    { id: "4", text: "Do dishes4", completed: true },
  ]);
  return (
    <>
      <ToDoInput setList={setList} />
      <ToDoList list={list} setList={setList} />
    </>
  );
}

export default App;
