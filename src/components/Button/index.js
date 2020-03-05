import React from "react";
import './Button.css';

function Button(props) {
  return (
        <React.Fragment>
          <button class="r-button" type="submit" onClick="{() => console.log('bla')}" >{props.label}</button>          
        </React.Fragment>
  )
}

export default Button;