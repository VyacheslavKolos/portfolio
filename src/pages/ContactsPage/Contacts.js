import React from 'react';

import css from './Contacts.module.css';
import {ButtonForContacts} from '../../components';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contacts = () => {
    return (
        <div>
            <span className={css.ContactsBigText}><p>Contacts</p></span>
            <div className={css.AllText}>
                <span className={css.ContactsText}><p>Want to know more or just chat?</p></span>
                <span className={css.ContactsText}><p>You are welcome!</p></span>
            </div>

            <div className={css.btnSend}>
                <ButtonForContacts/>
            </div>

            <div className={css.icons}>
                <a href={'https://www.instagram.com/kolos_0k/'} target="_blank"><InstagramIcon fontSize={'large'}/></a>
                <a href={'https://github.com/VyacheslavKolos'} target="_blank"><GitHubIcon fontSize={'large'}/></a>
                <a href={'https://www.linkedin.com/in/kolos-v-b8963020a/'} target="_blank"><LinkedInIcon fontSize={'large'}/></a>
            </div>

            <div className={css.likeMe}><p>Like me on Instagram, LinkedIn</p></div>

        </div>
    );
};

export {Contacts};