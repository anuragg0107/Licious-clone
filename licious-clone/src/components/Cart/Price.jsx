const Price = ({ label, price }) => {
    return (
      <div
        style={{
          // display: "flex",
          gap: "10px",
          // color:"red"
        }}
      >
        <div >{label}</div>
        
        <div style={{color:"red", marginTop:"20px"}}>Rs.{price}</div>
      </div>
    );
  };
  export default Price;
  