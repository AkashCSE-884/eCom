import $ from 'jquery';
class Ecom {

    static setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    static getCookie(cookieName) {
        let cookie = {};
        document.cookie.split(';').forEach(function (el) {
            let [key, value] = el.split('=');
            cookie[key.trim()] = value;
        })
        return cookie[cookieName];
    }
    delete_cookie(name) {
        document.cookie = name + '=; Path=/;  Domain=' + window.location.host + '; Expires=Thu, 01 Jan 1970 00:00:01 GMT; SameSite=None; Secure'
    }


}
export default Ecom;




