import { useState } from "react";
import Item from "./Item";
import Total from "./Total";

const Initialdata = [
  {
    id: 1,
    name: "Chicken",
    price: 30,
    qyt: 1
  },
 
 
];
const MainPage = () => {
  const [data, setData] = useState(Initialdata);

  const totalsum = (sum) => {
    return sum.reduce((acc, c) => acc + c.qyt * c.price, 0);
  };

  const hendalqty = (id, amount) => {
    let newdata = data.map((item) =>
      item.id === id ? { ...item, qyt: item.qyt + amount } : item
    );
    setData(newdata);
  };
  return (
    <div >
      {
        //  body
      }
      {data.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          label={item.name}
          price={item.price}
          qyt={item.qyt}
          hendalqty={hendalqty}
        />
      ))}

      {
        // total
      }
      <Total total={totalsum(data)} />
    </div>
  );
};
export default MainPage;
