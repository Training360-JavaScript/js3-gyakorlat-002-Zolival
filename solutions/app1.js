'use strict';

const setCookie = (cookieValue, expirationSec = 15) => {
    const now = new Date();
    now.setTime(now.getTime() + (expirationSec * 60 * 1000));
    const expires = now.toUTCString();
    return document.cookie = `token=${cookieValue};expires=${expires}`;
}

export default setCookie;
