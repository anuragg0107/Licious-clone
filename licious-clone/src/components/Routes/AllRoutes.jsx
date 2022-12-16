import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../LandingPage/HomePage'
import Payment from '../Payment/payment'

const AllRoutes = () => {
  return (
    <div>
    <Routes>
      <Route  path='/' element={<HomePage />} />
      <Route  path='/payment' element={<Payment />} />
    </Routes>
    </div>
  )
}

export default AllRoutes