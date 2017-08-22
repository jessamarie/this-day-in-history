(function () {
  'use strict'

  angular
    .module('historyApp', [
      'ui.router',
      'ngResource',
      '720kb.datepicker',
      'home',
      'moments',
      'discussions',
      'shuffle',
      'dateChecker.service'
    ])
})()

$(document).ready(function () {
  $('.imgContainer').delay(1000).fadeIn(700)
})
