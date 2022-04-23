import React from 'react';
import {NavLink} from "react-router-dom";

import css from "./header.module.css";
import {Burger} from './Burger/Burger';

const Header = () => {
    return (

        <div className={css.container}>
            <div className={css.header}>
                <NavLink to={'/home'}>Home</NavLink>
                <NavLink to={'/aboutMe'}>About me</NavLink>
                <NavLink to={'/skills'}>Skills</NavLink>
                <NavLink to={'/portfolio'}>Portfolio</NavLink>
                <NavLink to={'/contact'}>Contacts</NavLink>
            </div>

            {/*<div className={css.burger}>*/}
            {/*    <Burger/>*/}
            {/*</div>*/}

        </div>

    );
};

export default Header;