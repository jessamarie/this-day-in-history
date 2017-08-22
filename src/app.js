'use strict';

(function () {
  angular
    .module('historyApp', [
      'ui.router',
      'ngResource',
      '720kb.datepicker',
      'home',
      'moments',
      'shuffle',
      'dateChecker.service'
    ])
})()

$(document).ready(function () {
  $('.imgContainer').delay(1000).fadeIn(700)
})

$(document).ready(function () {
  $('#showDate').delay(1000).fadeIn(700)
})

$(document).ready(function () {
  $('#showInfo').delay(1000).fadeIn(700)
})
