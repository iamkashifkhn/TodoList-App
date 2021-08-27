import React, { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [listItems, setListItems] = useState([]);
  const cart = (event) => {
    setInputList(event.target.value);
  };
  const listOfItems = () => {
    if(inputList.length===0){
      alert("enter something")
    }else{
    setListItems((oldItems) => {
      return [...oldItems, inputList];
    });}
    setInputList("");
  };
  const deleteItems = (id) => {
    setListItems((oldItems) => {
      return oldItems.filter((arrElement, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main-div">
        <div className="center-div">
        <br/>
          <h1>ToDo List </h1>
          <div className="inputfield">
          <input
            type="text"
            onChange={cart}
            placeholder="Add an item"
            value={inputList}
          />
          <button onClick={listOfItems}> + </button>
          {console.log(listOfItems)}
          </div>
          <ol>
            {/* <li> {listItems} </li> */}
            {listItems.map((itemsValue, index) => {
              return (
                <TodoList
                  key={index}
                  id={index}
                  text={itemsValue}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default App;
