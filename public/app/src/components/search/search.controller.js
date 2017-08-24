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

  /* opens the date picker */
  this.open = function () {
    this.searchClicked = !this.searchClicked
    $('#icon1, #icon2, #icon3').hide()
    $('.imgContainer form').show()
  }

  /* goes to the requested date */
  this.submit = function (date) {
    if (date) {
      var params = {
        month: date.getMonth() + 1,
        day: date.getDate(),
        year: date.getFullYear()
      }
      // return view to default
      this.cancel()
      // go to requested state
      $state.go('momentShow', params)
    }
  }

  /** cancel returns the user
    to the options view
  **/
  this.cancel = function () {
    this.searchClicked = false
    $('.imgContainer form').hide()
    $('#icon1, #icon2, #icon3').show()
  }
} // end controller
