(function () {
  'use strict'

  angular
    .module('search.controller', [])
    .controller('SearchController', [
      '$state',
      SearchController
    ])

  function SearchController ($state) {
    this.today = new Date() // date object initialized with Today's date

    this.searchClicked = false

    this.showDatePicker = function () {
      console.log(this.searchClicked)
    }
  } // end controller
})()
