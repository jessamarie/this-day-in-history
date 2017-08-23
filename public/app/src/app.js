(function () {
  // local api route
  api_route = 'http://localhost:3000'
  // heroku api route
  //api_route = 'http://name.heroku.com'
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
      'comments'
    ])
})()
