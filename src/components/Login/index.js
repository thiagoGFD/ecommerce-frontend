import React from 'react';
import Button from "../Button";

class Login extends React.Component {

  constructor(props) {
    super(props);
  }

    render() {
      return (
        <React.Fragment>
          <h3>Sign In</h3>
          <input label="name" type="text" />
          <input label="password" type="text" />
          <Button>bla</Button>
          
        </React.Fragment>
      );
    }
  }

export default Login;