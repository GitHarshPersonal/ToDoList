import React from 'react'
import logo from '../logo.svg';
import '../App.css';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div className='navBar'>
      <ul>
        <img src={logo} height="35px" />
        <h2>{props.title}</h2>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </div>
  )
}

Header.defaultProps = {
  title: "Your Title Here"
}

Header.propTypes = {
  title: PropTypes.string
}