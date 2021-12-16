import { useSpring, animated, config } from 'react-spring';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Main from '../pages/Main';
import Reforms from '../pages/Reforms';
import Investment from '../pages/Investment';
import Sustainability from '../pages/Sustainability';
import Education from '../pages/Education';
import Culture from '../pages/Culture';
import Gender from '../pages/Gender';
import Social from '../pages/Social';

import './App.css';

function App() {

  // const mobOrDesc = window.screen.width > 600 ? <Desctop/> : <Mobile/>

  return (
     <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='reforms' element={<Reforms/>}/>
          <Route path='investment' element={<Investment/>}/>
          <Route path='sustainability' element={<Sustainability/>}/>
          <Route path='education' element={<Education/>}/>
          <Route path='culture' element={<Culture/>}/>
          <Route path='gender' element={<Gender/>}/>
          <Route path='social' element={<Social/>}/>
        </Routes>
      </div>
     </Router>
  );
}

export default App;
