import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <NavBar></NavBar>  
      
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
