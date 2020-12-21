/*
file: index.js
author: Ross McLean
desc: Handles events.
 */

$(function () {
    // $('#header').load('modules/header.html')
    $('#navbar').load('/components/navbar.html')
    // $('#footer').load('modules/footer.html')
  })

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }