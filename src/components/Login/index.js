import React, { useState } from 'react';
import Button from "../Button";

function Login() {
  const [state, setState] = useState(0);
  return (
    <React.Fragment>
      <h3>Sign In</h3>
      <input label="name" type="text" />
      <input label="password" type="text" />
      <Button>bla</Button>
      
    </React.Fragment>
  );
}

export default Login;