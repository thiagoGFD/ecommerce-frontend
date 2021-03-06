import React, { useState } from 'react';
import Button from "../Button";
import { useTranslation } from 'react-i18next';

import userService from '../../services/UserService';

function Login() {
  const { t } = useTranslation();
  const [user, setUser] = useState({});
  
  const signIn = () => {
    console.log('logiinnn ')
    userService.signIn().then(({data}) => {
      console.log('logou', data)
      setUser(data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <React.Fragment>
      <h3>Sign In</h3>
      <div className="login-container">
        <input label="name" type="text" />
        <input label="password" type="text" />
        <Button label={t('login.signin')} handleClick={()=>{signIn()}} />
      </div>
      
    </React.Fragment>
  );
}

export default Login;