import React from 'react';

import './Home.scss';

import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    const { t } = useTranslation();
    return (
        <div className="home-greetings">
            <FontAwesomeIcon icon={faShoppingBasket} /> {t("home.greetings")}
        </div>
    )
}

export default Home;
