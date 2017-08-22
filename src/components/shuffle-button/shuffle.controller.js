(function () {
  'use strict'

  angular
    .module('shuffle.controller', [])
    .controller('ShuffleController', [
      '$state',
      'dateChecker',
      ShuffleController
    ])

  function ShuffleController ($state, dateChecker) {
    this.today = new Date() // date object initialized with Today's date
    this.start = new Date(1900, 0, 0)

    /*
     * shuffle calculates a valid date object with a date
     * between January 01, 1900 and Today such that events
     * exist on that day. Then it changes the state to the
     * momentShow page of that day
     */
    this.shuffle = function () {
      this.randomDate = new Date(this.start.getTime() + Math.random() * (this.today.getTime() - this.start.getTime()))

      this.randomDate = {
        year: this.randomDate.getFullYear(),
        day: this.randomDate.getDay() + 1,
        month: this.randomDate.getMonth() + 1
      }

      this.checkDate(this)
    }

    /* checkDate querys the History API and
      checks that an event exists that day
    */
    this.checkDate = function (self) {
      dateChecker.check(this.randomDate).then(
          function (eventsExist) {
            if (eventsExist === false) {
              self.getRandomDate()
            } else {
              $state.go('momentShow', self.randomDate)
            }
          },
          function (error) {
            console.log(error)
          })
    } // end check date
  } // end controller
})()
