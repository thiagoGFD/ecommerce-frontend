import React, { useState } from 'react';
import { connect } from "react-redux";

import { useTranslation } from 'react-i18next';

import Button from "../Button";
import Loading from "../Loading";

import { userActions } from '../../actions/userActions';

const Login = ({user, loggingIn, login, logout}) => {
  const { t } = useTranslation();
  const [data, setData] = useState({username: null, password: null});
  
  const signIn = () => {
    const { username, password } = data;
    login(username, password);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  return (
    <React.Fragment>
      <h2>Sign In</h2>
        <div className="login-container">
          <div className="form-group">
            <label>{t('login.username')}</label>
            <input type="text" name="username" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>{t('login.password')}</label>
            <input type="password" name="password" onChange={handleChange} />
          </div>
          <Loading isLoading={loggingIn} />
          {!loggingIn && 
            <Button label={t('login.signin')} handleClick={()=>{signIn()}} />
          }
        </div>
      
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  const { user, loggingIn } = state.authentication;
  return { user, loggingIn };
};

const actionCreators = {
  login: userActions.login,
  logout: userActions.logout
};

export default connect(mapStateToProps, actionCreators)(Login);
