'use strict';

(function () {
  angular
    .module('home.controller.index', [])
    .controller('HomeIndexController', [
      HomeIndexController
    ])

  function HomeIndexController () {
    this.message = 'the home page!'
    console.log(this.message);
  }
})()
