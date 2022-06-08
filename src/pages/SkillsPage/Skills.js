import React from 'react';

import css from './Skills.module.css'
import css3 from '../../images/css.png'
import html5 from '../../images/html-5.png'
import js from '../../images/js.png'
import react from '../../images/react.png'
import node from '../../images/nodejs.png'

const Skills = () => {
    return (
        <div>
            <span className={css.SkillsBigText}><p>Skills</p></span>
            <span className={css.SkillsText}><p>I work in such technologies</p></span>

            <div className={css.techIcons}>
                <img src={css3} alt="css3"/>
                <img src={html5} alt="html5"/>
                <img src={js} alt="html5"/>
                <img src={react} alt="html5"/>
                {// <img src={node} alt="html5"/>
                     }

            </div>
        </div>
    );
};

export {Skills};