import React from 'react'
import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Homescreen from './screens//Homescreen'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Productdescscreen from './screens/Productdescscreen';
import Cartscreen from './screens/Cartscreen';
import Loginscreen from './screens/Loginscreen';
import Registerscreen from './screens/Registerscreen';


function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homescreen />} exact />
          <Route path='/product/:productid' element={<Productdescscreen />} exact />
          <Route path='/cart' element={<Cartscreen />} exact />
          <Route path='/login' element={<Loginscreen />} exact />
          <Route path='/register' element={<Registerscreen />} exact />
        </Routes>


      </BrowserRouter>



    </div>
  );
}

export default App;
