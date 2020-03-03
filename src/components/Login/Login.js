import React from 'react';

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
          <button type="submit">Send</button>
          
        </React.Fragment>
      );
    }
  }

export default Login;