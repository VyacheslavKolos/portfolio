import React from 'react';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';



const ButtonForContacts = () => {
    return (
        <a href={'https://t.me/Kolos_0k'} target="_blank"><Button variant="contained" endIcon={<SendIcon/>}>
            Send message
        </Button></a>
    );
};

export {ButtonForContacts};