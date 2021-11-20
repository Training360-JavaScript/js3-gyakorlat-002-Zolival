'use strict'
/*
*/
const setCookie = (cookieName = 'token', cookieValue, expirationSec = 15) => {
    const now = new Date();
    now.setTime(now.getTime() + (expirationSec * 60 * 1000));
    const expires = now.toUTCString();
    return document.cookie = `${cookieName}=${cookieValue}; expires=${expires}`;
}

setCookie('viewed', '5');
setCookie('uid', '354774631237');
setCookie('ssid', 'Bx55OWbHJ0Vt_IGIF');



const cookieHandler = {
    getAll(){
        const cookies = document.cookie.split(';')
        .map((item)=> {
            const [zero, one] = item.split('=')
            return [zero.trim(), one.trim()]
        });
        //console.log(`getAll() cookies = `, Object.fromEntries(cookies) );
        return Object.fromEntries(cookies);
    },

    toSessionStorage(){
        const cookies = this.getAll();
        console.log(`toSessionStorage = `, cookies )
        for(let key in cookies){
            sessionStorage.setItem(key, cookies[key])
        }
        return sessionStorage
    },
    
    flush(){
        const cookies = document.cookie.split(`; `)
        .forEach((item) => {
            const txt = `${item.split("=")[0]}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`
            console.log(`flush = `, txt)
            document.cookie = txt
            return txt
        })

    }
    
}
/*
console.log('getAll = ', cookieHandler.getAll());
console.log(`toSessionStorage = `, cookieHandler.toSessionStorage());
console.log(`flush return = `, cookieHandler.flush());
*/

export { cookieHandler };
