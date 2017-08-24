'use strict'

angular
  .module('search')
  .controller('SearchController', [
    '$state',
    SearchController
  ])

function SearchController ($state) {
  this.today = new Date() // date object initialized with Today's date

  this.searchClicked = false

  this.open = function () {
    this.searchClicked = !this.searchClicked
    $('#icon1, #icon2, #icon3').hide()
    $('.imgContainer form').show()
  }

  this.submit = function (date) {
    if (date) {
      var params = {
        month: date.getMonth() + 1,
        day: date.getDay() + 1,
        year: date.getFullYear()
      }
      this.cancel()
      $state.go('momentShow', params)
    }
  }

  this.cancel = function () {
    this.searchClicked = false
    $('.imgContainer form').hide()
    $('#icon1, #icon2, #icon3').show()
  }
} // end controller
