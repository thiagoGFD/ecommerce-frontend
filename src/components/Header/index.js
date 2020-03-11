import React from 'react';

import { Redirect } from "react-router-dom";

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
            <span className="header-logo">Logo</span>
            <h1>
                {getWelcomeMsg()}
            </h1>
        </div>
    );
}

export default Header;