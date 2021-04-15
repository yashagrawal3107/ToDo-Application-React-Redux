import React from 'react';
import "./App.css";
import Input from './components/Input';
import TodoItem from './components/TodoItem';

import {useSelector} from "react-redux";

import {selectTodoList} from "./features/todoSlice"

function App() {
const todoList = useSelector(selectTodoList)

  return (
    <div className="App">
      <div className = "todo">
        <h1> My ToDo List</h1>
        <br/>
        <Input />
        <br/>
        <br/>
        <hr/>
        <br/>
        <div className ="app_container">
          <div className ="app_todoContainer">
            {
              todoList.map(item => (
                <TodoItem
                  title = {item.title}
                  description = {item.description}
                  id = {item.id}
                  todoStatus = {item.todoStatus}
                  dueDate = {item.dueDate}
                />
              ))
            }
          </div>
     </div>
      </div>
    </div>
  );
}

export default App;
