'use strict';

(function () {
  angular
    .module('home.controller.index', [])
    .controller('HomeIndexController', [
      HomeIndexController
    ])

  function HomeIndexController () {
    this.message = 'the home page!'

    function getMonthNameAsNum (name) {
      switch (name) {
        case 'January': 1
          break
        case 'Febuary': 2
          break
        case 'March': 3
          break
        case 'April': 4
          break
        case 'May': 5
          break
        case 'June': 6
          break
        case 'July': 7
          break
        case 'August': 8
          break
        case 'September': 9
          break
        case 'October': 10
          break
        case 'November': 11
          break
        case 'Decemper': 12
          break

        default:

      }
    }
  }
})()
