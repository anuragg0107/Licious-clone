import Button from "./Button";
const Quantity = ({ qty, changecount, id }) => {
  return (
    <div style={{ display: "flex", gap: 5,marginLeft:"300px",marginTop:"-40px"}}>
      <Button onClick={() => changecount(id, -1)}>-</Button>
      <div style={{marginTop:"18px"}}>{qty}</div>
      <Button onClick={() => changecount(id, +1)}>+</Button>
    </div>
  );
};
export default Quantity;
