"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: 
   Date:   
   
   Filename: mpl_links.js

*/

// 3. Return to the mp_links.js file in your editor and create an event listener for the load event that runs an anonymous function.
window.addEventListener("load", function () {
    // 4. Within the anonymous function, create the allselect variable referencing all select elements nested within the govLinks form.
    var allSelect = document.getElementsByClassName("optionLinks");

    // 5. Loop through the allSelect object collection and for each selection list in the collection create an anonymous function for the onchange event. Within this anonymous function, use the href property of the location object to change the page shown in the browser window to the value of the target of the event object that initiated the onchange event.
    for (var i = 0; i < allSelect.length; i++) {
        document.addEventListener("onchange", function () {
            allSelect.location.href.value = allSelect;
        });
    }
});