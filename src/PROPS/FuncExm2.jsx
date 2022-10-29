// import React from 'react'

// const FuncExm2 = (props) => {
//   return (
//     <div>
//         <hr />
//       <h1>FUNCTION2</h1>

// <pre>{JSON.stringify(props)}</pre>
//       <h3>wish:{props.one}</h3>
//       <h3>name: {props.name}</h3>
//       <hr />
//       <h4>ID:{props.data.eid}</h4>
//       <h4>name:{props.data.ename1}</h4>
//       <h4>salary:{props.data.esal}</h4>
//     </div>
//   )
// }

// export default FuncExm2

//CLASS COMPONENT(FUNCTION TO CLASS COMPONENT):
import React, { Component } from 'react'

class FuncExm2 extends Component {
  render() {
    return (
      <div>
        <h2>CLASS COMPONENT</h2>
        <pre>{JSON.stringify(this.props)}</pre>

        <h4>ID:{this.props.data.eid}</h4>
        <h4>NAME:{this.props.data.ename1}</h4>
        
      </div>
    )
  }
}

export default FuncExm2


