import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Events from './Pages/Events';
import Store from './Pages/Store';
import Product from './Pages/Product';
import Cart from './Pages/Cart';

function App() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/events' element={<Events />} />
            <Route path='/store' element={<Store />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>  
    );
}

export default App;
