import React from 'react';

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { useTranslation } from 'react-i18next';

import Button from "../Button";

import './Header.scss';

/* 
  Header Component
  @param {user} user info
  @returns the app header
 */
const Header = ({user}) => {
    const { t } = useTranslation();
    const getUserInfo = () => {
        return <span className="header-user-info">`${user.firstName}`</span>;
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

const mapStateToProps = state => ({
    user: state.user  
    });
export default connect(mapStateToProps)(Header);