import React from "react";

function Button() {
  return (
        <React.Fragment>
          <button type="submit" onClick="{() => console.log('bla')}" >Send</button>          
        </React.Fragment>
  )
}

export default Button;