import { useEffect } from "react";
import { useState } from "react";
import Item from "./Item";
import Total from "./Total";
import axios from "axios";
import { Flex } from "@chakra-ui/react";


 
 

const MainPage = () => {
  
  const [data, setData] = useState([]);
  // const [total,setTotal]=useState(null);
  // console.log(data)
  useEffect(() => {
    async function getCartData(){
      let res=await axios.get("https://licious-api-data.vercel.app/cart");
      // console.log(res)
      setData(res.data);
    }
    getCartData()
  },[])

 const totalsum = (data) => {
    return data.reduce((acc, c) => acc +  c.price, 0);
  };

  const hendalqty = async (id, amount) => {
    // console.log(id)
    // let newdata = data.map((item) =>
    //   item.id === id ? { ...item, quantity: item.quantity + amount } : item
    // );
    // setData(newdata);
    let data=await axios.get(`https://licious-api-data.vercel.app/cart/${id}`);
    // console.log(data)
    await axios.patch(`https://licious-api-data.vercel.app/cart/${id}`,{quantity:data.quantity+amount})
  };

  return (
    <div >
     
      {data.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          label={item.title}
          price={item.price}
          qyt={item.quantity}
          hendalqty={hendalqty}
        />
      ))}

    <Flex >Total :- <Total  total={totalsum(data)} /></Flex>
      
    </div>
  );
};

export default MainPage;
