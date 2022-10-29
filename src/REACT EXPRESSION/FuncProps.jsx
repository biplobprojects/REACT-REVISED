//REACT EXPRESSION IS USED TO READ THE DATA OF THE COMPONENT:

import React from 'react'

const FuncProps = () => {

    //VARIABLES:
    let user ="IPHONE 12"
    let ename="biplob"

    //object:
    let data ={
        id:"567",
        des:"principal",

    }



  return (
    <div>
        <h1>{user}</h1>
        <h3>{ename}</h3>
<h4>{data.id}</h4>
<h4>{data.des}</h4>
      
    </div>
  )
}

export default FuncProps
