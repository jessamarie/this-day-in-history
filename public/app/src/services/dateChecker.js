/*
  For our data we chose to use this API:
  http://history.muffinlabs.com/

  which is based off the information found on wikipedia
*/

(function () {
  'use strict'

  angular
    .module('dateChecker.service', [])
    .factory('dateChecker', [
      'Moment',
      dateCheckerService
    ])

  function dateCheckerService (Moment) {
    var self = this

    this.filterByYear = function (object, year) {
      return object.filter((item) => { return item.year === year.toString() })
    }

    this.isEmpty = function (obj) {
      return angular.equals(obj, [])
    }

    function check (date) {
      return Moment.get({ month: date.month, day: date.day }).$promise.then(
          function (data) {
            var events = self.filterByYear(data.data.Events, date.year)
            var births = self.filterByYear(data.data.Births, date.year)
            var deaths = self.filterByYear(data.data.Deaths, date.year)

            var exists = !self.isEmpty(events) ||
                   !self.isEmpty(births) ||
                   !self.isEmpty(deaths)

            return exists
          },
          function (error) {
            console.log(error)
          }
        )
    } // end check

    return {
      check: check
    }
  }
})()