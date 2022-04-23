import React from 'react';

import css from './AboutMe.module.css';
import okten from '../../images/oktenn.png';
import nltu from '../../images/nltu.png';

const AboutMe = () => {
    return (
        <div className={css.aboutMe}>
            <span className={css.bigText}><p>About me</p></span>

            <span className={css.aboutMeInfo}>
                <p>Hi, I'm Vyacheslav - Web UI developer from Lviv. <br/> I'm interesting on Web developing and everything connected with it. </p>

                <div className={css.okten}>
                    <p>I studied at the Lviv IT school Okten School courses at the Java Script Complex course.</p>
                
                    <div className={css.oktenInfo}>
                        <img src={okten} alt="okten"/>
                        <p>September 2021- May 2022</p>
                    </div>

                    
                </div>

                <div className={css.okten}>
                    <p>I'm studying at Lviv National Forestry University, specialty - computer science.
                </p>
                <div className={css.oktenInfo}>
                    <img src={nltu} alt="nltu"/>
                       <p>September 2020- June 2024</p>
                </div>

                </div>

            </span>

        </div>
    );
};

export {AboutMe};