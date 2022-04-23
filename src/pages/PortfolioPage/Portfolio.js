import React from 'react';

import css from './Portfolio.module.css'
import movieApp from '../../images/movieApp.png'

const Portfolio = () => {
    return (
        <div className={css.portfolio}>
            <span className={css.PortfolioBigText}><p>Portfolio</p></span>

            <div className={css.movieApp}>
                <img src={movieApp} alt="movie app"/>
            </div>
        </div>
    );
};

export {Portfolio};