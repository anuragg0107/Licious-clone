import * as types from "./actionTypes";
import axios from "axios";

const getProducts =(id, params)=>(dispatch  )=>{
  dispatch({type : types.GET_PRODUCTS_REQUEST})

  axios.get(`https://licious-api-data.vercel.app/${id}`,params)
  .then((abcd) =>dispatch({type : types.GET_PRODUCTS_SUCCESS ,payload : abcd.data}))
  .catch((error)=>dispatch({type : types.GET_PRODUCTS_fAILURE}))   
}
const addProductCartRequest = (payload) => {
  return {
    type: types.ADD_PRODUCT_CART_REQUEST,
    payload,
  };
};
const addProductCartSuccess = (payload) => {
  return {
    type: types.ADD_PRODUCT_CART_SUCCESS,
    payload,
  };
};
const addProductCartFailure = (payload) => {
  return {
    type: types.ADD_PRODUCT_CART_FAILURE,
    payload,
  };
};
const addProductToCart = (product) => (dispatch) => {
  dispatch(addProductCartRequest());
  axios
    .post("https://licious-api-data.vercel.app/cart", product)
    .then((abcd) => dispatch(addProductCartSuccess(abcd.data)))
    .catch((error) => dispatch(addProductCartFailure(error.data)));
};
export { addProductToCart, getProducts };