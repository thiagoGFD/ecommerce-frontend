import React, { useState } from 'react';
import Button from "../Button";
import { useTranslation } from 'react-i18next';

import userService from '../../services/UserService';

function Login() {
  const { t } = useTranslation();
  const [user, setUser] = useState({});
  const [data, setData] = useState({username: null, password: null});
  
  const signIn = () => {
    console.log('logiinnn ')
    userService.signIn(data.username, data.password).then(({data}) => {
      console.log('logou', data)
      setUser(data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  return (
    <React.Fragment>
      <h3>Sign In</h3>
      <div className="login-container">
        <div className="form-group">
          <label>{t('login.username')}</label>
          <input type="text" name="username" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>{t('login.password')}</label>
          <input type="password" name="password" onChange={handleChange} />
        </div>
        <Button label={t('login.signin')} handleClick={()=>{signIn()}} />
      </div>
      
    </React.Fragment>
  );
}

export default Login;