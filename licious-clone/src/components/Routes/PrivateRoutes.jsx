import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../Context/ContextProvider";

const PrivateRoutes = ({children}) => {
  const { auth } = useContext(AppContext);
  if (!auth) {
    return <Navigate to={"/"} />;
  }
  return children;
};

export default PrivateRoutes;
