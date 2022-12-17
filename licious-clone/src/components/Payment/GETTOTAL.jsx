import React, {useState,useEffect} from 'react';
import Total from "../Cart/Total";
import axios from "axios";
 

const Sum = () => {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getCartData(){
      let res=await axios.get("https://licious-api-data.vercel.app/cart");
 
      setData(res.data);
    }
    getCartData()
  },[])

 const totalsum = (data) => {
    return data.reduce((acc, c) => acc +  c.price, 0);
  };

  const hendalqty = async (id, amount) => {
 
    let data=await axios.get(`https://licious-api-data.vercel.app/cart/${id}`);

    await axios.patch(`https://licious-api-data.vercel.app/cart/${id}`,{quantity:data.quantity+amount})
  };

  return (
    <div >
      <Total total={totalsum(data)} />
      
    </div>
  );
};


export default Sum;
