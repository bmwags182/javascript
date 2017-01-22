// ==UserScript==
// @name         Trump Killer
// @namespace    http://localhost
// @version      0.1
// @description  try to block trump!
// @author       Bret Wagner
// @match        https://*.facebook.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var posts = document.getElementsByClassName("userContentWrapper _5pcr");
    for(var i=0; i<posts.length; i++) {
        if (posts[i].innerHTML.toLowerCase().includes("trump")) {
            posts[i].style.display = "none";
            console.log("hidden");
        }
    }
    })();