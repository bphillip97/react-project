import React from 'react';
import './App.css';
import InputTodo from './components/InputTodo';
import ListTodo from './components/ListTodo';

const App = () => {
  return (
    <>
    <div className="container">
      <InputTodo />
      <ListTodo />
      </div>
    </>
  );
}

export default App;
