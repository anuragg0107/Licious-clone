import { RangeSlider } from "@chakra-ui/react";
import Price from "./Price";
import Quantity from "./Quantity";
const Item = ({ label, price, qyt, hendalqty, id }) => {
  return (
    <div
    //   style={{
    //     display: "flex",
    //     gap: 10,
    //     padding: 10,
    //     justifyContent: "center",
    //     alignItems: "center",
    //     border: "1px solid red",
    //     marginTop: 10
    //   }}
    >
      <Price label={label} />
      <Price   price={price} />
      <Quantity id={id} qty={qyt} changecount={hendalqty} />
    </div>
  );
};
export default Item;
