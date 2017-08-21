'use strict';

(function () {
  angular
    .module('moments.controller.show', [])
    .controller('MomentShowController', [
      'Moment',
      '$stateParams',
      MomentShowController
    ])

  function MomentShowController (Moment, $stateParams) {
    this.date = {
      month: $stateParams.month,
      day: $stateParams.day
    }

    this.year = $stateParams.year

    var self = this

    loadMoments()

    this.filterByYear = function (object) {
      return object.filter((item) => { return item.year === this.year.toString() })
    }

    function loadMoments () {
      // get all data for the specific date
      Moment.get(self.date).$promise.then(
          function (data) {
            self.date = data.date
            self.url = data.url
            self.events = self.filterByYear(data.data.Events)
            self.births = self.filterByYear(data.data.Births)
            self.deaths = self.filterByYear(data.data.Deaths)
          },
          function (error) {
            console.log(error)
          }
        )
    }
  }
})()
