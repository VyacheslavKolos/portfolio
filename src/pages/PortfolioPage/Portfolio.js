import React from 'react';

import css from './Portfolio.module.css';
import movieApp from '../../images/movieApp.png';
import netShop from '../../images/net-shop.png';

const Portfolio = () => {
    return (
        <div className={css.portfolio}>

            <div className={css.movieApp}>

                <span className={css.PortfolioBigText}><p>Portfolio</p></span>

                <h3>React movie application: work with Redux, REST API</h3>
                <img src={movieApp} alt="movie app"/>
            </div>

            <div className={css.netShop}>
                <h3> Internet-shop using HTML, CSS, adaptive design</h3>
                <img src={netShop} alt="net shop"/>
            </div>
        </div>
    );
};

export {Portfolio};
