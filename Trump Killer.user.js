// ==UserScript==
// @name            Trump Killer
// @namespace       http://localhost
// @version         0.3.3
// @description     try to block the trump!
// @author          Bret Wagner
// @match           https://*.facebook.com/*
// @require         http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @require         ./variables.user.js
// @grant           GM_xmlhttpRequest
// @grant
// ==/UserScript==
var flickrKey = API_KEY; // Enter your flickr API key here
var flickrSecret = API_SECRET; // Enter your flicker Secret code here

(function() {
    'use strict';
    var baseState = history.state;
    document.addEventListener("scroll", scrollFunction, {passive:true});
    blockTrump();
})();

// Fix for jQuery so as not to break the page
this.$ = this.jQuery = jQuery.noConflict(true);

var kittensRequest = {};

var kitten = {
        id        : "",
        owner     : "",
        secret    : "",
        server    : "",
        title     : "",
        isPublic  : "",
        isFriend  : "",
        isFamily  : ""
    };

function blockTrump() {
    var baseState = history.state;
    var posts = document.getElementsByClassName("userContentWrapper _5pcr");
    for(var i=0; i<posts.length; i++) {
        if (posts[i].innerHTML.toLowerCase().includes("trump")) {
            // posts[i].style.display = "none";
            hidePost(posts[i]);
            // console.log("hidden");
        } else if (posts[i].innerHTML.toLowerCase().includes("donald") && posts[i].innerHTML.toLowerCase().includes("president")) {
            hidePost(posts[i]);
            // posts[i].style.display = "none";
        }
    }
    removeAds();
}

function removeAds() {
    var ads = document.getElementsByClassName("ego_section");
    for (var i=0; i<ads.length; i++) {
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
    /* Later this function will replace trump posts with images of cats
    as well as adjust the post meta to say things like "John Smith posted
    something vile, we thought you would enjoy this instead" */
    post.style.display = "none";
    getKittens(); // hidden until we can get the page from flickr working
}

function getKittens() {
    var flickrData = {api_key:flickrKey, text:"kittens, cat, kitten, cats", method: "flickr.photos.search"};
    kittensRequest = {method:"POST", url:"https://api.flickr.com/services/rest/", data: flickrData, onerror:"errors", onload:function(res) { console.log(res.responseText); /* getCats(res.responseText); */ }, headers:{text:"kittens"}};
    /*
        The request is not being called at this time because I have hit a snag
        where I need to get an API key in order to request things from flickr
     */

    GM_xmlhttpRequest(kittensRequest);
}

function errors(err) {
    console.log("Something broke " + err);
}

function getCats(page) {
    // Right now this isn't being used, I got a response from flickr but I need an API key

}



function flickrErrorCode(error) {
    var errorCodes = {
        1     : "too many tags in ALL query",
        2     : "Unknown user",
        3     : "Parameterless searches have been disabled",
        4     : "You don't have permission to view this pool",
        10    : "Sorry, the Flickr search API is not currently available",
        11    : "No valid machine tags",
        12    : "Exceeded maximum allowable machine tags",
        17    : "You can only search within your own contacts",
        18    : "Illogical arguments",
        100   : "Invalid API key",
        105   : "Service currently unavailable",
        106   : "Write operation failed",
        111   : "Format 'xxx' not found",
        112   : "Method 'xxx' not found",
        114   : "Invalid SOAP envelope",
        115   : "Invalid XML-RPC method call",
        116   : "Bad URL found"
    };
    console.log(errorCodes[error]);
    window.alert("Hey, there was an issue and the developer would like to know about it. check your browser's console and email me at bretwagner@bwagner-webdev.com");
}

