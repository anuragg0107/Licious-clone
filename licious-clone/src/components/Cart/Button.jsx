const Button = ({ onClick, children, disabled }) => {
    return (
      <button
        style={{
          padding: "5px",
          border: 0,
          fontSize: "30px",
          background: "white",
          color: "red"
        }}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  export default Button;