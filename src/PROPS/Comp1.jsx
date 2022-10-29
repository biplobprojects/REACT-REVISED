import React, { Component } from "react";
import Comp2 from "./Comp2";
class Comp1 extends Component {
  
task ="this is a property"
  //ARRAY OBJECTS:
  users = [
    {
      id: 123,
      name: "abc",
      salary: 78000,
    },
    {
      id: "123",
      name: "kick",
      salary: 45000,
    },
  ];

  employee=[{"id":1,"name":"Bondie","email":"bdabourne0@sciencedaily.com","gender":"Male"},
  {"id":2,"name":"Solomon","email":"seastlake1@pcworld.com","gender":"Male"},
  {"id":3,"name":"Arlette","email":"alavies2@bravesites.com","gender":"Female"},
  {"id":4,"name":"Robin","email":"rklaassens3@un.org","gender":"Male"},
  {"id":5,"name":"Celestia","email":"cmcglue4@time.com","gender":"Female"},
  {"id":6,"name":"Harri","email":"hberth5@ibm.com","gender":"Polygender"},
  {"id":7,"name":"Lorene","email":"lduthie6@wisc.edu","gender":"Female"},
  {"id":8,"name":"Hussein","email":"hlindroos7@bbb.org","gender":"Male"},
  {"id":9,"name":"Raimundo","email":"rbrend8@example.com","gender":"Male"},
  {"id":10,"name":"Lillian","email":"lbarrable9@networksolutions.com","gender":"Female"},
  {"id":11,"name":"Franchot","email":"fmabbetta@census.gov","gender":"Male"},
  {"id":12,"name":"Franky","email":"fstoffelsb@wix.com","gender":"Female"},
  {"id":13,"name":"Constancia","email":"cruberyc@deliciousdays.com","gender":"Female"},
  {"id":14,"name":"Carly","email":"cparnabyd@infoseek.co.jp","gender":"Female"},
  {"id":15,"name":"Arie","email":"aaguttere@mac.com","gender":"Male"},
  {"id":16,"name":"Daffi","email":"djoslowf@sbwire.com","gender":"Female"},
  {"id":17,"name":"Verna","email":"vwinnardg@canalblog.com","gender":"Female"},
  {"id":18,"name":"Brewster","email":"bparlatth@hubpages.com","gender":"Agender"},
  {"id":19,"name":"Bay","email":"bfishwicki@europa.eu","gender":"Male"},
  {"id":20,"name":"Agustin","email":"abraddonj@smh.com.au","gender":"Male"}]

  render() {
    return (
      <div>
        <h1>COMPONENT 1</h1>
        {/* <Comp2 one={"GM"} two={"GN"} /> */}

        {/* <Comp2 name={"biplob borboruah"} userdata={this.users} prop={this.task}/> */}
        <Comp2  empdata={this.employee}/>

      
      </div>
    );
  }
}

export default Comp1;
