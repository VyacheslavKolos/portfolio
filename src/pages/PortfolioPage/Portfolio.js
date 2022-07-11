import React from 'react';
import {Box} from '@mui/material';

import css from './Portfolio.module.css';
import movieApp from '../../images/movieApp.png';
import netShop from '../../images/net-shop.png';
import events from '../../images/events.png'

const Portfolio = () => {
    return (
        <div className={css.portfolio}>
            <div className={css.eventsManager}>

                <span className={css.PortfolioBigText}><p>Portfolio</p></span>

                <h2>Event manager with timezones</h2>
                <img src={events} alt="events" />
            </div>

            <div className={css.delimiter}></div>

            <div className={css.movieApp}>


                <h2>React movie application: work with Redux, REST API</h2>
                <img src={movieApp} alt="movie app"/>
            </div>

            <div className={css.delimiter}></div>

            <div className={css.netShop}>
                <h2> Internet-shop using HTML, CSS, adaptive design</h2>
                <img src={netShop} alt="net shop"/>
            </div>



        </div>
    );
};

export {Portfolio};
