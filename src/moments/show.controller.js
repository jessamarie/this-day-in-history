'use strict';

(function () {
  angular
    .module('moments.controller.show', [])
    .controller('MomentShowController', [
      'Moment',
      '$state',
      '$stateParams',
      MomentShowController
    ])

  function MomentShowController (Moment, $state, $stateParams) {
    this.dateParams = {
      month: $stateParams.month,
      day: $stateParams.day
    }

    this.year = $stateParams.year
    var self = this

    loadMoments()

    this.filterByYear = function (object) {
      return object.filter((item) => { return item.year === this.year.toString() })
    }

    /* load moments resolves the promise and
      contains functions needed after a
      promise is resolved
     */
    function loadMoments () {
      // get all data for the specific date
      return Moment.get(self.dateParams).$promise.then(
          function (data) {
            self.date = data.date
            self.url = data.url
            self.events = self.filterByYear(data.data.Events)
            self.births = self.filterByYear(data.data.Births)
            self.deaths = self.filterByYear(data.data.Deaths)

            self.isEmpty = function (obj) {
              return angular.equals(self.events, [])
            }

            self.getRandomDate = function () {
              var now = new Date()
              var start = (new Date(1900, 0, 0))
              return new Date(start.getTime() + Math.random() * (now.getTime() - start.getTime()))
            }
            /* sets a random event that occured on this day */
            self.getRandomEvent = function () {
              if (!self.isEmpty(self.events)) {
                self.randomEvent = self.events[Math.floor(Math.random() * self.events.length)]
              } else if (!self.isEmpty(self.births)) {
                self.randomEvent = self.births[Math.floor(Math.random() * self.births.length)]
              } else if (!self.isEmpty(self.deaths)) {
                self.randomEvent = self.deaths[Math.floor(Math.random() * self.deaths.length)]
              } else {
                var randomDate = self.getRandomDate()

                var y = randomDate.getFullYear()
                var d = randomDate.getDay() + 1
                var m = randomDate.getMonth() + 1

                $state.go('momentShow', { month: m, day: d, year: y })
                  // text: 'Sorry, this day was way boring. Try again!',
                  // year: self.year
              }
            } // end get random event
            self.getRandomEvent()
          },
          function (error) {
            console.log(error)
          }
        )
    } // end load moments
  }
})()
