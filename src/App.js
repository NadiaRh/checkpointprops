import React from 'react';
import GetData from './profile.js';
import './App.css';
import photo from './photo.png';

const data={firstname:'Nadia', lastname:'Rahmeni'}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GetData name={data} age={19} job="étudiante"/>
        <img src={photo}  alt='' />
      </header>
    </div>
  );
}

export default App;
