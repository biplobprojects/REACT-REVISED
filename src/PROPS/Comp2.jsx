import React, { Component } from "react";

class Comp2 extends Component {
  render() {
    return (
      <div>
        <hr />
        <h1>COMPONENT 2</h1>
        {/* <pre>{JSON.stringify(this.props)}</pre> */}
        {/* <h3>{this.props.one}</h3>
       <h3>{this.props.two}</h3> */}

        <pre>{JSON.stringify(this.props)}</pre>

        {/* <h4>first object name:{this.props.userdata[0].name}</h4>
       <h4>Second object name:{this.props.userdata[1].name}</h4>
       <h5>{this.props.prop}</h5>
 */}

        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <table className="table table-hover">
                <thead className="bg-dark text-white">
                  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>GENDER</th>
                  </tr>
                </thead>
                <tbody>
                {

                  this.props.empdata.map((emp)=>{

                    return <tr>
                      <td>{emp.id}</td>
                      <td>{emp.name}</td>
                      <td>{emp.email}</td>
                      <td>{emp.gender}</td>
                    </tr>
                  })
                }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comp2;
