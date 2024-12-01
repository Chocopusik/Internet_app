import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Market from './Market/Market'
import Chat from './components/Chat/Chat';
import HomePage from './HomePage';
function App() {
return(
  <>
  <div>
  <Routes>
    <Route path='/items' element={<Market/>}/>
    <Route path='/chat' element={<Chat/>}/>
    <Route path="/" element={<HomePage/>} />
  </Routes>
  </div>
  </>
)

}

export default App;
