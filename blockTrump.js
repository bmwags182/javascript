// ==UserScript==
// @name         Trump Killer
// @namespace    http://localhost
// @version      0.1.1
// @description  try to block trump!
// @author       Bret Wagner
// @match        https://*.facebook.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var baseState = history.state;
    blockTrump();
})();

function blockTrump() {
	var baseState = history.state;
    var posts = document.getElementsByClassName("userContentWrapper _5pcr");
    for(var i=0; i<posts.length; i++) {
        if (posts[i].innerHTML.toLowerCase().includes("trump")) {
            posts[i].style.display = "none";
            console.log("hidden");
        }
    }
    sleep(30000);
    stateChanged(baseState, getCurrentState());
}

function getCurrentState() {
    var stateNow = history.state;
    return stateNow;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function stateChanged(baseState, stateNow) {
    if (baseState != stateNow) {
        baseState = stateNow;
        blockTrump();
    } else {
        sleep(30000);
    }
}