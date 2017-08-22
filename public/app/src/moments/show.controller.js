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

    loadMoments(this)

    this.filterByYear = function (object) {
      return object.filter((item) => { return item.year === this.year.toString() })
    }

    /* load moments resolves the promise and
      contains functions needed after a
      promise is resolved
     */
    function loadMoments (self) {
      // get all data for the specific date
      return Moment.get(self.dateParams).$promise.then(
          function (data) {
            self.date = data.date
            self.url = data.url
            self.events = self.filterByYear(data.data.Events)
            self.births = self.filterByYear(data.data.Births)
            self.deaths = self.filterByYear(data.data.Deaths)

            self.isEmpty = function (obj) {
              return angular.equals(obj, [])
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
                console.log('There shoud be sth here')
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