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

          <img className="all_image_21" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/ccbbaf22-e0c7-32cc-e3a2-8ca49beb585b/original/Chicken_(1).png" alt="all_image" />


          <img className="all_image_21" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/ccbbaf22-e0c7-32cc-e3a2-8ca49beb585b/original/Chicken_(1).png" alt="all_image" />


          <label className="product_sort_input1">All</label>
        </div>
        <div className="product_sort_start2">
          <input        
            type="checkbox"
            onChange={handleCheckbox}
            value="CurryCuts"
            defaultChecked={category.includes("CurryCuts")}
          />

          <img className="all_image_21" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/5da469b3-75b9-685f-7ab7-0ab8b695d84f/original/Curry-Cuts.png" alt="curry_cuts_image" />


          <img className="all_image_21" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/5da469b3-75b9-685f-7ab7-0ab8b695d84f/original/Curry-Cuts.png" alt="curry_cuts_image" />


          <label className="product_sort_input1">Curry Cuts</label>
        </div>
        <div className="product_sort_start2">
          <input 
            type="checkbox"
            onChange={handleCheckbox}
            value="Boneless"
            defaultChecked={category.includes("Boneless")}
          />

          <img className="all_image_21" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/caeb5c62-eada-9f92-430f-acced72a1dd3/original/Boneless-_-mince.png" alt="Boneless&mince_image" />


          <img className="all_image_21" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/caeb5c62-eada-9f92-430f-acced72a1dd3/original/Boneless-_-mince.png" alt="Boneless&mince_image" />


          <label className="product_sort_input1">Boneless & Mince</label>
        </div>
        <div className="product_sort_start2">
          <input 
            type="checkbox"
            onChange={handleCheckbox}
            value="SpecialityCuts"
            defaultChecked={category.includes("SpecialityCuts")}
          />

          <img className="all_image_21" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/370272da-f9ad-19f6-a57d-0c65bca06b68/original/Speciality-Cuts.png" alt="speciality_cuts_image" />


          <img className="all_image_21" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/370272da-f9ad-19f6-a57d-0c65bca06b68/original/Speciality-Cuts.png" alt="speciality_cuts_image" />


          <label className="product_sort_input1">Speciality Cuts</label>
        </div>
        <div className="product_sort_start2">
          <input 
            type="checkbox"
            onChange={handleCheckbox}
            value="Offals"
            defaultChecked={category.includes("Offals")}
          />

          <img className="all_image_21" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/2acd5933-df33-4766-49e8-d8e24eb4f9ff/original/Others_(1).png" alt="offals_image" />


          <img className="all_image_21" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/2acd5933-df33-4766-49e8-d8e24eb4f9ff/original/Others_(1).png" alt="offals_image" />


          <label className="product_sort_input1">Offals</label>
        </div>
        <div className="product_sort_start2">
          <input 
            type="checkbox"
            onChange={handleCheckbox}
            value="Combos"
            defaultChecked={category.includes("Combos")}
          />

          <img className="all_image_21" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/9edd0c6c-f079-10a3-c88b-11df9d1f871b/original/Combo_(3).png" alt="combos_image" />


          <img className="all_image_21" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/9edd0c6c-f079-10a3-c88b-11df9d1f871b/original/Combo_(3).png" alt="combos_image" />


          <label className="product_sort_input1">Combos</label>
        </div>
        <div className="product_sort_start2">
          <input          
            type="checkbox"
            onChange={handleCheckbox}
            value="Ready to Cook"
            defaultChecked={category.includes("Ready to Cook")}
          />

          <img className="all_image_21" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/9ca57aa9-7fe9-16ee-c265-893b41fe7e78/original/Combos.png" alt="Ready_to_cook_image" />


          <img className="all_image_21" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/9ca57aa9-7fe9-16ee-c265-893b41fe7e78/original/Combos.png" alt="Ready_to_cook_image" />


          <label className="product_sort_input1">Ready to Cook</label>
        </div>
        <div className="product_sort_start2">
          <input         
            type="checkbox"
            onChange={handleCheckbox}
            value="Meat Masalas"
            defaultChecked={category.includes("Meat Masalas")}
          />

          <img className="all_image_21" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/6cba8198-f9ef-acaf-0840-34df61b0243b/original/chicken-curry_(3).png" alt="meat_masalas_image" />


          <img className="all_image_21" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/6cba8198-f9ef-acaf-0840-34df61b0243b/original/chicken-curry_(3).png" alt="meat_masalas_image" />


          <label className="product_sort_input1">Meat Masalas</label>
        </div>
      </div>
    </div>
  );
};


export default Chickenfilter;


export default Chickenfilter;

export default Chickenfilter;


