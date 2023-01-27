import { RangeSlider } from "@chakra-ui/react";
import Price from "./Price";
import Quantity from "./Quantity";
const Item = ({ label, price, qyt, hendalqty, id }) => {
  return (
    <div
      style={{
        // display: "flex",
        gap: 10,
        padding: 10,
        height:"110px",
        // justifyContent: "center",
        // alignItems: "center",
        // border: "1px solid red",
        marginTop: 10,
        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
        // boxShadow: "10px 10px 5px  #aaaaaa",
        // border: "1px solid #BFBFBF"
      }}
    >
      <Price label={label} price={price} />
      {/* <Price  /> */}
      <Quantity id={id} qty={qyt} changecount={hendalqty} />
    </div>
  );
};
export default Item;
