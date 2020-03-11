import React from 'react';

import { Link } from "react-router-dom";

import { useTranslation } from 'react-i18next';

import './Header.scss';

const Header = ({user}) => {
    const { t } = useTranslation();
    const getWelcomeMsg = () => {
        let msg = t("welcome.title");
        if(!!user && !!user.token) {
            msg += `, <span>${user.firstName}</span>`;
        }
        return msg;
    }

    return (
        <div className="r-header">
            <Link to="/">
                <img className="header-logo" alt="logo" src="https://i0.wp.com/www.tweex.com.br/wp-content/uploads/2019/11/icon-omnichannel.png?ssl=1"/>
            </Link>
            <h1>
                {getWelcomeMsg()}
            </h1>
        </div>
    );
}

export default Header;