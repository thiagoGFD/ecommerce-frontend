import React from 'react';
import Button from "../Button";
import { useTranslation } from 'react-i18next';

import userService from '../../services/UserService';

function Login() {
  const { t } = useTranslation();

  const signIn = () => {
    console.log('logiinnn ')
    userService.signIn().then(({data}) => {
      console.log('logou', data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <React.Fragment>
      <h3>Sign In</h3>
      <input label="name" type="text" />
      <input label="password" type="text" />
      <Button label={t('login.signin')} handleClick={()=>{signIn()}} />
      
    </React.Fragment>
  );
}

export default Login;