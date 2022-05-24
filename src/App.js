import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/todos';
import Footer from './MyComponents/footer';
import About from './MyComponents/about';
import Error from './MyComponents/error';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const onDelete = function (item) {
    console.log("I am onDelete", item);

    setTodos(todos.filter((e) => {
      return e !== item;
    }));
    localStorage.getItem("todos", JSON.stringify(todos));
  }

  const addTodo = function (title, desc) {
    let sno;
    if (todos.length !== 0) {
      sno = todos[todos.length - 1].sno + 1;
    }
    else sno = 0;
    const tempTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, tempTodo]);

  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>
        <Header title="My Todo list" />
        <Switch>
          <Route path="/" element={<Todos list={todos} onDelete={onDelete} addTodo={addTodo} />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;