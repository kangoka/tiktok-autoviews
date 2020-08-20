// ==UserScript==
// @name         TTAV
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Educational Purpose (they said)
// @author       kangoka
// @include      https://fireliker.com/*
// @include      https://lputorrents.xyz/*
// @match        https://bugsliker.me/index.php?info=Session_Expired
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        GM_addStyle
// @grant        none
// ==/UserScript==

if (document.getElementsByName("username").length > 0) {
    $('input[name="username"]').val('sarahdpy7'); //Change YOUR_USERNAME with your username
    setTimeout(function () {
        lp();
    }, 2000);


} else {
    welcome();
}

welcome();

function welcome() {
    if (document.getElementsByClassName("fa fa-play-circle").length > 0) {
        document.getElementsByClassName("fa fa-play-circle")[0].click();
    }
}

setTimeout(lp, 13000); 

function lp() {
    if (document.getElementsByClassName("btn btn-primary").length > 0) {
        document.getElementsByClassName("btn btn-primary")[0].click();
    }
}

setTimeout(changeValue, 2000);

function changeValue() {
    /*
      You can change value below to number you want
      value=1 : 200 views
      value=2 : 400 views
      value=3 : 600 views
      value=4 : 800 views
      value=5 : 1000 views
    */
    waitForKeyElements(".form-control:has(option[value=5])", selectFinickyDropdown); 

    function selectFinickyDropdown(jNode) {
        var evt = new Event("click");
        jNode[0].dispatchEvent(evt);

        jNode.val('5');

        evt = new Event("change");
        jNode[0].dispatchEvent(evt);
    }
}

setTimeout(sendViews, 2000);

function sendViews() {
    if (document.getElementsByClassName("btn btn-warning").length > 0) {
        document.getElementsByClassName("btn btn-warning")[0].click();
    }
}


setTimeout(makeSure, 30000);

//Sometimes the website didn't load correctly, so to avoid that, I create this function
function makeSure(){
    window.location.href = 'https://fireliker.com/welcome.php';
}

if (window.location.href == 'https://bugsliker.me/index.php?info=Session_Expired'){
    window.location.href = 'https://fireliker.com/welcome.php';
}
