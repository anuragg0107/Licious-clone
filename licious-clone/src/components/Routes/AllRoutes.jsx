import React from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from '../LandingPage/HomePage';
import Products from '../ProductPage/Products';


import HomePage from '../LandingPage/HomePage'
import Products from '../ProductPage/Products';
import ProductDetails from "../ProductPage/ProductDetails";
import PrivateRoutes from './PrivateRoutes';
import Payment from '../Payment/payment';
import { Login } from '../Login/Login';
import OTP from '../Payment/OTP';

const AllRoutes = () => {
  return (
    <div>
    <Routes>
      <Route  path='/' element={<HomePage />} />

      <Route path="/chicken" element={<Products />} />

     <Route path='/login' element={<Login/>}  />
      <Route path="/chicken" element={<Products />} />
      <Route path="/chicken/:id" element={<ProductDetails />} />
    <Route path='/checkout' element={ <Payment /> } >  
    </Route>
    <Route path='/checkout/otp' element={<OTP/>}></Route>

    </Routes>
    </div>
  )
}

export default AllRoutes