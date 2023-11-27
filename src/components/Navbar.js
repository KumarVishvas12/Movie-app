import React, { Component } from 'react';
import "../App.css";
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
      <Link to={'/'} className='navbar-item'><h1 >Movies App</h1></Link>
      <Link to={'/favourites'} className='navbar-item'><h3>Favourites</h3></Link>
        
        
      </div>
    )
  }
}
