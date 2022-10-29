import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <a href="/" className="navbar-brand">
            REACT PROPS
          </a>
    

      <div className="ml-auto">
          <ul className="navbar-nav">
            <li className="nav-list">
              <a href="/" className="nav-link">HOME</a>
            </li>
            <li className="nav-list">
              <a href="/about" className="nav-link">ABOUT</a>
            </li>
            <li className="nav-list">
              <a href="/contact" className="nav-link">CONTACT US</a>
            </li>
          </ul>
        </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
