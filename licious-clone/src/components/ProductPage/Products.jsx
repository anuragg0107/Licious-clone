import React, { useState } from "react";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { getProducts } from "../../Redux/ProductReducer/action";
import Product from "./Product";
import Chickenfilter from "./Chickenfilter";

const Products = () => { 
  const chicken = useSelector((state) => state.reducer.chicken);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (chicken.length === 0  || location.search ) {    
      const getProductssParams = {
        params: {
          category: searchParams.getAll("category")     
        },
      };
      dispatch(getProducts("chicken",getProductssParams));
    }
  }, [location.search]);
  
  return (
    <div  >
      <div className="allProduct1">

      <h1 className="allTagh1">Chicken</h1>
      <Chickenfilter />
        </div>

        <h1 className="allTagh1">Chicken</h1>
        <Chickenfilter />
      </div>

      <div className="allProduct11">
        {chicken.map((item) => {
          return (
            <div key={item.id}>          
              <Product item={item}/>          
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;