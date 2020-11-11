import React, { useState } from 'react';
import './App.css';

// Import components
import List from './components/List'
import Form from './components/Form'

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <>
      <h1 id='title'>To-Do List</h1>
      <Form input={input} todos={todos} setTodos={setTodos} setInput={setInput} />
      <List todos={todos} setTodos={setTodos}/>
    </>
  );
}

export default App;
