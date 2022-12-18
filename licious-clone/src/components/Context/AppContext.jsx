
import React,{ createContext, useState } from "react";

//import uuid v4



export const AppContext = createContext();

export default function AppContextProvider({ children }) {
 
  
  const [userData, setuserData] = useState([]);

  const addToCart = (name, price, qty, image) => {
    setuserData([ ...userData, { name: name, price: price, qty: qty, image: image }]);
    console.log(userData);
  }


  const value = { userData,addToCart, };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
