// import { useState } from 'react'

// import '../components/component/Navbar.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login'
import Products from './Products';
import CartList from './CartList';
import AddToCart from './components/AddToCart';
import MyAccount from './MyAccount';
import Protected from './components/Protected'

//-- import { useDispatch } from 'react-redux';
//-- import { clearAllItem } from './redux/slice';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Protected Cmp={Home}/> } />
         <Route path="/login" element={<Login/>}/>
        <Route path="/products" element={<Protected Cmp={Products} /> }/>
        <Route path="/cartlist" element={<Protected Cmp={CartList} /> }/>
        <Route path="/addtocart" element={<Protected Cmp={AddToCart} /> }/>
        <Route path="/myaccount" element={<Protected Cmp={MyAccount} /> }/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;