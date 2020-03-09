import React, { useState, useEffect} from "react";
import '../Button';
import Button from "../Button";

import './Dropdown.css';

/* 
  Dropdown Component
  @param {boolean} startsOpen
  @returns dropdown element
 */
const Dropdown = (props) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(!!props.startsOpen);
  }, [props.startsOpen]);
  return (
    <div className="dropdown-container">
      <Button label={props.label} handleClick={()=>{setOpen(!open)}}/>
      <div className={`dropdown-floating ${!open? 'dropdown-closed' : ''}`}>
        {props.children}
      </div>
    </div>
  )
}

export default Dropdown;