// ==UserScript==
// @name         Trump Killer
// @namespace    http://localhost
// @version      0.3.2
// @description  try to block the trump!
// @author       Bret Wagner
// @match        https://*.facebook.com/*
// @grant        GM_xmlhttpRequest
// @grant
// ==/UserScript==

(function() {
    'use strict';
    var baseState = history.state;
    document.addEventListener("scroll", scrollFunction, {passive:true});
    blockTrump();
})();

function blockTrump() {
	var baseState = history.state;
    var posts = document.getElementsByClassName("userContentWrapper _5pcr");
    for(var i=0; i<posts.length; i++) {
        if (posts[i].innerHTML.toLowerCase().includes("trump") {
            posts[i].style.display = "none";
            // console.log("hidden");
        }
    }
    removeAds();
}

function removeAds() {
    var ads = document.getElementsByClassName("ego_section");
    for (var i=0; i<ads.length(); i++) {
        ads[i].style.display = "none";
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function scrollFunction() {
    blockTrump();
}
