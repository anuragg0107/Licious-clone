import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../LandingPage/HomePage'
import Address from "../Bag/AddressPage"

const AllRoutes = () => {
  return (
    <div>
    <Routes>
      <Route  path='/' element={<HomePage />} />
       <Route path="/address" element={<Address/>} />
    </Routes>
    </div>
  )
}

export default AllRoutes