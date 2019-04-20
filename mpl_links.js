"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: 
   Date:   
   
   Filename: mpl_links.js

*/

// Creates an event listener for the load event that runs an anonymous function.
window.addEventListener("load", function (e) {
    // The allselect variable references all select elements nested inside the govLinks form.
    var allSelect = document.forms.govLinks;

    // Loops through the allSelect object collection. The href property of the location object to change the page shown in the browser window.
    for (var i = 0; i < allSelect.length; i++) {
        allSelect[i].onchange = function (e) {
            window.location.href = e.target.value;
        }
    }
});