import React from 'react';

import css from './HomePage.module.css';


const HomePage = () => {
    return (
        <div className={css.container}>
            <div className={css.personInfo}>
                <div className={css.name}>
                    <p>Vyacheslav</p>
                    <p>Kolos</p>
                </div>

                <div className={css.info}>
                    <p>React developer</p>
                    <p>19 years old, Lviv</p>
                </div>
            </div>

            <div className={css.photo}>
                {/*<img src={me} alt="me"/>*/}
            </div>
        </div>
    );
};

export {HomePage};