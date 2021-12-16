import React, { Component } from "react";

import {Link} from 'react-router-dom'

class Nav extends Component {
  render() {
    return <div>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/form">Form</Link></li>
        <li><Link to="/list">List</Link></li>
      </ul>
      
    </div>;
  }
}

export default Nav;
