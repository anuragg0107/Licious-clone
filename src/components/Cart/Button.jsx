const Button = ({ onClick, children, disabled }) => {
    return (
      <button
        style={{
         
          fontSize: "30px",
          background: "white",
          color: "red",
          padding:"4px",
          height:"0px",
          

        }}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  export default Button;