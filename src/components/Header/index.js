import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { useTranslation } from 'react-i18next';

import Button from "../Button";

import './Header.scss';

/* 
  Header Component
  @param {user} user info
  @returns the app header
 */
const Header = () => {
    const { t } = useTranslation();
    const {user} = useSelector(state => state.authentication);
    const getUserInfo = () => {
        return <span className="header-user-info">{`${user.firstName} ${user.lastName}`}</span>;
    }

    return (
        <div className="r-header">
            <Link to="/">
                <img className="header-logo" alt="logo" src="https://i0.wp.com/www.tweex.com.br/wp-content/uploads/2019/11/icon-omnichannel.png?ssl=1"/>
                <span className="header-siteName">MiscShop.com</span>
            </Link>
            <h1>
                {t("welcome.title")}
            </h1>
            <div>
                {(!user || !user.token) && 
                    <Link to="/login">
                        <Button label="Login" />
                    </Link>
                }
                
                {user && !!user.token &&
                    getUserInfo()
                }
            </div>
        </div>
    );
}

export default Header;