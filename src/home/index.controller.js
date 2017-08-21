'use strict';

(function () {
  angular
    .module('home.controller.index', [])
    .controller('HomeIndexController', [
      HomeIndexController
    ])

  function HomeIndexController () {
// ui-sref="momentShow({month: vm.month, day: vm.day, year: vm.year})"
    this.date = getToday()
    this.start = new Date(1900, 0, 0)
    // this.year = date.getFullYear()
    // this.day = date.getDay()
    // this.month = date.getMonth()

    /* returns a date object with a date
      between January 01, 1900 and Today */
    this.getRandomDate = function () {
      this.randomDate = new Date(this.start.getTime() + Math.random() * (this.date.getTime() - this.start.getTime()))
      console.log(this.randomDate)
    }

      /* returns a date object with today's date */
    function getToday () {
      return new Date()
    }
  }
})()
