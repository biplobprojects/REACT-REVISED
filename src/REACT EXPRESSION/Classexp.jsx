import React, { Component } from 'react'

export class Classexp extends Component {

    //PROPERTIES:
    pname="iphone 4"
    pid=1234

    //OBJECT:
    Emp={
        id:123,
        name:"piku das",
        salary:67000

    }
  render() {
    return (
      <div>

        <h3>{this.pname}</h3>
        <h3>{this.pid}</h3>

        <h4>{JSON.stringify(this.Emp)}</h4>
        <h5>salary:{this.Emp.salary}</h5>
        <h5>Name:{this.Emp.name}</h5>
        <h5>id:{this.Emp.id}</h5>
        
      </div>
    )
  }
}

export default Classexp
