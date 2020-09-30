import React from 'react';
import './MenuItem.scss';

import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuItem = (props) => (
    <NavLink to={props.to} className="menu-item">
        <span><FontAwesomeIcon icon={props.icon} /></span>
        <span>{props.title}</span>
    </NavLink>
);

export default MenuItem;
