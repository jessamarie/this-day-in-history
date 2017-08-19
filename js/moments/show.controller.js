'use strict';

(function () {
  angular
    .module('history')
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
    var self = this

    loadMoments()

    function loadMoments () {

      // get all data for the specific date
      Moment.get(self.date).$promise.then(
          function (data) {
            self.date = data.date
            self.url = data.url
            self.events = data.data.Events
            self.births = data.data.Births
            self.deaths = data.data.Deaths
          },
          function (error) {
            console.log(error)
          }
        )
    }
  }
})()
