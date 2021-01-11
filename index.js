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

function collapseExpandNav () {
  var x = document.getElementById('navbar-top')
  if (x.className === 'navbar') {
    x.className += ' responsive'
  } else {
    x.className = 'navbar'
  }
}
