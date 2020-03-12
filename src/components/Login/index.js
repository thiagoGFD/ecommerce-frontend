import React, { useState } from 'react';
import { connect } from "react-redux";

import { useTranslation } from 'react-i18next';

import Button from "../Button";

const Login = ({user, dispatch}) => {
  const { t } = useTranslation();
  const [data, setData] = useState({username: null, password: null});
  
  const signIn = () => {
    dispatch({type: "LOGIN", data: data})
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  return (
    <React.Fragment>
      <h2>Sign In</h2>
      {user ? user.firstName:'asd'}
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
const mapStateToProps = state => ({
  user: state.user  
  });
export default connect(mapStateToProps)(Login);