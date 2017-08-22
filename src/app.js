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
      'search',
      'dateChecker.service'
    ])
})()

$(document).ready(function () {
  $('.imgContainer').delay(1000).fadeIn(700)
})
