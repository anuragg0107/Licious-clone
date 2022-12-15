import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../LandingPage/HomePage';
import Products from '../ProductPage/Products';

const AllRoutes = () => {
  return (
    <div>
    <Routes>
      <Route  path='/' element={<HomePage />} />
      <Route path="/chicken" element={<Products />} />
    </Routes>
    </div>
  )
}

export default AllRoutes