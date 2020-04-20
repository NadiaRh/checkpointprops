import React from 'react';
import GetData from './profile.js';
import './App.css';
import photo from './photo.png';

const data={firstname:'Nadia', lastname:'Rahmeni'}


function App() {
  
  return (
    
    <div className="App">
      <header className="App-header">

        <GetData fullname={data} age={19} profession="étudiante" />
        <img src={photo}  alt='' />
        
      </header>
    </div>
  );
}

export default App;
