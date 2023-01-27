// const Total = ({ total }) => {
//   // console.log(total)
//     return (
//       <div >
//         Total :{total}
//       </div>
//     );
//   };
//   export default Total;
  // style={{ border: "1px solid red", padding: 10, marginTop: 5 }}
  const Total = ({ total }) => {
    // console.log(total)
      return (
        <div style={{  color:'red',fontWeight:'bold',fontSize:"18px",marginLeft:'5px'}}>
           {total} 
        </div>
      );
    };
    export default Total;