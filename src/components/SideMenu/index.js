import React from 'react';

import './SideMenu.scss';

const SideMenu = (props) => {
    return (
        <div className="sidemenu-container">
            {props.children}
        </div>
    )
}

export default SideMenu;
