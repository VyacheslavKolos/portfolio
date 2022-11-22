import React from 'react';
import {Box} from '@mui/material';

import css from './Portfolio.module.css';
import movieApp from '../../images/movieApp.png';
import events from '../../images/events.png'
import nltuSchedule from '../../images/nltu-schedule.png'

const Portfolio = () => {
    return (
        <div className={css.portfolio}>
            <div className={css.eventsManager}>

                <span className={css.PortfolioBigText}><p>Portfolio</p></span>

                <h2>Event manager with timezones</h2>
                <img src={events} alt="events" />
            </div>

            <Box className={css.delimiter}></Box>

            <Box width={'90%'} margin={'0 auto'}>
                <h2>NLTU Schedule - an application designed to make it easy and quick to find lessons</h2>
                <img width={'100%'} src={nltuSchedule} alt="nltuSchedule" />
            </Box>

            <div className={css.delimiter}></div>


            <div className={css.movieApp}>


                <h2>React movie application: work with Redux, REST API</h2>
                <img src={movieApp} alt="movie app"/>
            </div>

            <div className={css.delimiter}></div>




        </div>
    );
};

export {Portfolio};
