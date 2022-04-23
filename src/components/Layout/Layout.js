import React from 'react';
import {Outlet} from "react-router-dom";

import css from "./Layout.module.css";
import Header from "../Header/Header";
import {AboutMe, Contacts, Portfolio, Skills} from '../../pages';

const Layout = () => {
    return (
        <div className={css.container}>
            <Header/>
            <div className={css.block1px}></div>
            <div className={css.outlet}>
                <Outlet/>
            </div>

            <div className={css.mediaDisplayInfo}>
                <AboutMe/>
                <Skills/>
                <Portfolio/>
                <Contacts/>
            </div>

        </div>

    );
};

export default Layout;