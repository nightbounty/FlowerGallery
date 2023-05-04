import React from 'react';

import"./App.css";

import Gallery from './Gallery';
import Extra from './Hemerocallis';
import Hemerocallis from './Hemerocallis';
import Rose from './Rose';


function App() {
  return (
    
    <>
      <div>
        <h1 id = "title" >Welcome   To   My   Garden</h1>
      </div>
      <Gallery></Gallery>
      <h1 id = "title1">Hemerocallis</h1>
      <Hemerocallis />
      <h1 id = "title1">Rose</h1>
      <Rose />
    </>

  );  
}

export default App;
