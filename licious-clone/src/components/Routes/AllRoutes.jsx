import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../LandingPage/HomePage'
import Payment from '../Payment/payment'
import OTP from '../Payment/OTP'

const AllRoutes = () => {
  return (
    <div>
    <Routes>
      <Route  path='/' element={<HomePage />} />

      <Route  path='/payment' element={<Payment />} />
      {/* <Route  path='/payment/otp' element={<OTP />} /> */}
      <Route path='/checkout/otp' element={<OTP/>}></Route>
    </Routes>
    </div>
  )
}

export default AllRoutes