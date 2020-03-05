import React from "react";
import './Button.css';

/* 
  Button Component
  @param {string} label
  @param {func} handleClick
  @returns button element
 */
const Button = ({ label, handleClick }) => {
  return (
    <button className="r-button" type="submit" onClick={() => handleClick} >{label}</button>
  )
}

export default Button;