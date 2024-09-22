import './App.css';
import React, { useContext, useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import { CartWidget } from './components/CartWidget/CartWidget';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} ></Route>
        <Route path='/category/:categoryID' element={<ItemListContainer />} ></Route>
        <Route path='/detail/:id' element={<ItemDetailContainer />} ></Route>
        <Route path='/cartwidget' element={<CartWidget />} ></Route>
      </Routes>
    </>
  );
}

export default App;
