import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';

function App() {


  return (
    <div className="app">
      <Header />
      <div className='app__container'>
        <Main />
      </div>
    </div>
  );
}

export default App;
