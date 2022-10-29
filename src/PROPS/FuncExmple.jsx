import FuncExm2 from "./FuncExm2";
import React from "react";

const FuncExmple = () => {
  //VARIABLES:
  let ename="rahul gandhi"

  //OBJECT:
  let user={
    eid:123,
    ename1:"joy ghosh",
    esal:39000
  }

  return (
    <div>
      <h1>FUNCTION 1</h1>
      <hr />
      <FuncExm2 one={"goodmorning"} name={ename} data= {user}/>
     

    </div>
  );
};

export default FuncExmple;
