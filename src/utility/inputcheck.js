import React from 'react';

const inputcheck = {
    emailCheck: (email) => {
        const regCheck = /[a-zA-Z0-9\.!#\$%&'\*\+-/=\?\^_`{\|]@{1}[a-zA-Z]*\.{1}(com|net|org|info|gov|mil|co\.uk){1}$/gi;
        
        return email.toString().match(regCheck) ? true : false;
    },
    nameCheck: (name) => {
        const regCheck = /^[a-zA-Z]{2,40}$/gi;

        return name.toString().match(regCheck) ? true : false;
    }
}

export default inputcheck;