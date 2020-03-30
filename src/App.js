import React from 'react';
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import './App.css';

function App() {
  return (
    <div className="App">
    	<h1 className="App-title">Todoアプリ</h1>
    	<Form />
      <Filter />
    </div>
  );
}

export default App;