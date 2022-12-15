const Price = ({ label, price }) => {
    return (
      <div
        style={{
          display: "flex",
          gap: "10px"
        }}
      >
        <div>{label}</div>
        
        <div>Rs.{price}</div>
      </div>
    );
  };
  export default Price;
  