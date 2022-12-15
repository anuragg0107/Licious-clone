import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({item}) => {
  const { id, image,title,description,wet,price} = item;
  return (
    <div>
      <div className="product_first_div1" key={id}>
      <Link to={`/chicken/${id}`}><img className="Imageabcd" src={image} alt="abcd" />
        <h3 className="product_title1">{title}</h3>
        <p className="product_description_1">{description}</p>
        <div className="product_weight1">
          <p className="product_weight2">{wet}</p>
        </div></Link>
        <div className="product_weight1">
          <h3 className="product_price1"> MRP:₹{price}</h3>
          <button className="product_add_cart1" >Add To Cart</button>
        </div>
      </div>
    </div>
  );
};
export default Product;
