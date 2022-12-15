import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getProducts } from "../../Redux/ProductReducer/action";
import "./Product.css";

const Chickenfilter = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearhParams] = useSearchParams();
  const urlCategory = searchParams.getAll("category");
  const [category, setCategory] = useState(urlCategory || []);

  const handleCheckbox = (e) => {
    const option = e.target.value;
    let newValue = [...category];
    if (category.includes(option)) {
      newValue.splice(newValue.indexOf(option), 1);
    } else {
      newValue.push(option);
    }
    setCategory(newValue);
  };

  useEffect(() => {
    if (category) {
      setSearhParams({ category: category });
      dispatch(getProducts("chicken", { params: { category } }));
    }
  }, [category, dispatch, setSearhParams]);

  return (
    <div>      
      <div className="product_sort_start1">
      <div className="product_sort_start2">
          <input         
            type="checkbox"
            onChange={handleCheckbox}
            value="CurryCuts"
            defaultChecked={category.includes("")}
          />
          <label className="product_sort_input1">All</label>
        </div>
        <div className="product_sort_start2">
          <input        
            type="checkbox"
            onChange={handleCheckbox}
            value="CurryCuts"
            defaultChecked={category.includes("CurryCuts")}
          />
          <label className="product_sort_input1">Curry Cuts</label>
        </div>
        <div className="product_sort_start2">
          <input 
            type="checkbox"
            onChange={handleCheckbox}
            value="Boneless"
            defaultChecked={category.includes("Boneless")}
          />
          <label className="product_sort_input1">Boneless & Mince</label>
        </div>
        <div className="product_sort_start2">
          <input 
            type="checkbox"
            onChange={handleCheckbox}
            value="SpecialityCuts"
            defaultChecked={category.includes("SpecialityCuts")}
          />
          <label className="product_sort_input1">Speciality Cuts</label>
        </div>
        <div className="product_sort_start2">
          <input 
            type="checkbox"
            onChange={handleCheckbox}
            value="Offals"
            defaultChecked={category.includes("Offals")}
          />
          <label className="product_sort_input1">Offals</label>
        </div>
        <div className="product_sort_start2">
          <input 
            type="checkbox"
            onChange={handleCheckbox}
            value="Combos"
            defaultChecked={category.includes("Combos")}
          />
          <label className="product_sort_input1">Combos</label>
        </div>
        <div className="product_sort_start2">
          <input          
            type="checkbox"
            onChange={handleCheckbox}
            value="Ready to Cook"
            defaultChecked={category.includes("Ready to Cook")}
          />
          <label className="product_sort_input1">Ready to Cook</label>
        </div>
        <div className="product_sort_start2">
          <input         
            type="checkbox"
            onChange={handleCheckbox}
            value="Meat Masalas"
            defaultChecked={category.includes("Meat Masalas")}
          />
          <label className="product_sort_input1">Meat Masalas</label>
        </div>
      </div>
    </div>
  );
};

export default Chickenfilter;
