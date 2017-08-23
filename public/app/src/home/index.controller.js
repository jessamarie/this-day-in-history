'use strict'

angular
    .module('home')
    .controller('HomeIndexController', HomeIndexController)

HomeIndexController.$inject = []

function HomeIndexController () {
  $(document).ready(function () {
    $('.imgContainer').delay(1000).fadeIn(700)
  })
}
