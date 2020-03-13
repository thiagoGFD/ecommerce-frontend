import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { useTranslation } from 'react-i18next';

import Button from "../Button";
import Loading from "../Loading";

import { userActions } from '../../actions/userActions';

const Login = ({login, logout}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { user, loggingIn } = useSelector(state => state.authentication);
  const [data, setData] = useState({username: null, password: null});
  
  const signIn = () => {
    const { username, password } = data;
    dispatch(userActions.login(username, password));
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  return (
    <React.Fragment>
      <h2>{t('login.title')}</h2>
        <div className="login-container">
          <div className="form-group">
            <label>{t('login.username')}</label>
            <input type="text" name="username" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>{t('login.password')}</label>
            <input type="password" name="password" onChange={handleChange} />
          </div>
          {!loggingIn && 
            <Button label={t('login.signin')} handleClick={()=>{signIn()}} />
          }
          <Loading isLoading={loggingIn} />
        </div>
      
    </React.Fragment>
  );
}

export default Login;
