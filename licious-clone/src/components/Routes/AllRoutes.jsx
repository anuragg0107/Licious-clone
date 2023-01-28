import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../LandingPage/HomePage";
import Products from "../ProductPage/Products";
import ProductDetails from "../ProductPage/ProductDetails";
import PrivateRoutes from "./PrivateRoutes";
import Payment from "../Payment/payment";
import OTP from "../Payment/OTP";
import Register from "../Signup/register";
import Login from "../Signin/login";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chicken" element={<Products />} />
        <Route path="/chicken/:id" element={<ProductDetails />} />
        <Route
          path="/checkout"
          element={
            // <PrivateRoutes>
              <Payment />
            // </PrivateRoutes>
          }
        ></Route>
        <Route path="/checkout/otp" element={<OTP />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
