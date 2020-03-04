import React from "react";
import './Button.css';

function Button() {
  return (
        <React.Fragment>
          <button class="r-button" type="submit" onClick="{() => console.log('bla')}" >SignIn</button>          
        </React.Fragment>
  )
}

export default Button;