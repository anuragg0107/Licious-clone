import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const PrivateRoutes = ({children}) => {
  const { auth } = useContext(AppContext);
  if (!auth) {
    return <Navigate to={"/login"} />;
  }
  return children;
};

export default PrivateRoutes;
