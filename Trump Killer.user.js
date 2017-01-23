// ==UserScript==
// @name         Trump Killer
// @namespace    http://localhost
// @version      0.3.3
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
            hidePost(posts[i]);
            // console.log("hidden");
        } else if (posts[i].innerHTML.toLowerCase().includes("donald") && posts[i].innerHTML.toLowerCase().includes("president")) {
            hidePost(posts[i]);
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


function hidePost(post) {
    post.style.display = "none";
}
