import React, { useState } from 'react';
import Button from "../Button";
import { useTranslation } from 'react-i18next';

function Login() {
  const [state, setState] = useState(0);
  const { t, i18n } = useTranslation();

  return (
    <React.Fragment>
      <h3>Sign In</h3>
      <input label="name" type="text" />
      <input label="password" type="text" />
      <Button label={t('login.signin')}/>
      
    </React.Fragment>
  );
}

export default Login;