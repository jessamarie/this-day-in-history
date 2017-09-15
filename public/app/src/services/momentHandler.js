/*
  For our data we chose to use this API:
  http://history.muffinlabs.com/

  which is based off the information found on wikipedia
*/

'use strict'

angular
  .module('moments')
  .factory('momentHandler', momentHandlerService)

momentHandlerService.$inject = ['Moment']

function momentHandlerService (Moment) {
  var moments = {}

  let storeMoment = (date, moment) => {
    moments[date.month] = moments[date.month] || []
    if (!moments[date.month][date.day]) {
      moments[date.month][date.day] = moment
    }
    return moments[date.month][date.day]
  }

  let findMoment = (date) => {
    if (moments[date.month] && moments[date.month][date.day]) {
      return moments[date.month][date.day]
    } else {
      return null
    }
  }

  let filterByYear = function (object, year) {
    return object.filter((item) => { return item.year === year.toString() })
  }

  let isEmpty = function (obj) {
    return angular.equals(obj, [])
  }

  let cleanRawMomentData = (data) => {
    let moment = {}
    moment.date = data.date
    moment.url = data.url
    moment.events = data.data.Events
    moment.births = data.data.Births
    moment.deaths = data.data.Deaths

    return moment
  }

  let filterMomentByYear = (moment, year) => {
    let filteredMoment = {}

    filteredMoment.date = moment.date
    filteredMoment.url = moment.url
    filteredMoment.events = filterByYear(moment.events, year)
    filteredMoment.births = filterByYear(moment.births, year)
    filteredMoment.deaths = filterByYear(moment.deaths, year)

    return filteredMoment
  }

  let momentHasYear = (moment, year) => {
    var filteredMoment = filterMomentByYear(moment, year)

    return !isEmpty(filteredMoment.events) ||
           !isEmpty(filteredMoment.births) ||
           !isEmpty(filteredMoment.deaths)
  }

  function check (date) {
    // see if the date was previously loaded before making an API call
    let moment = findMoment(date)
    if (moment && momentHasYear(moment, date.year)) {
      return new Promise((resolve, reject) => {
        resolve(true)
      })
    }
    // make a request if we don't have the moment cached
    // get all data for the specific date
    return Moment.get({ month: date.month, day: date.day }).$promise.then(
        function (data) {
          // store whole moment without trimming years
          let moment = storeMoment(date, cleanRawMomentData(data))
          // return whether moment has the requested year
          return momentHasYear(moment, date.year)
        },
        function (error) {
          console.log(error)
        }
      )
  } // end check

  function getMoments (date) {
    let moment = findMoment(date)
    if (moment) {
      return new Promise((resolve, reject) => {
        resolve(filterMomentByYear(moment, date.year))
      })
    }
    // make a request if we don't have the moment cached
    // get all data for the specific date
    return Moment.get({ month: date.month, day: date.day}).$promise.then(
        function (data) {
          // store whole moment without trimming years
          let moment = storeMoment(date, cleanRawMomentData(data))
          // return only for the requested year
          return filterMomentByYear(moment, date.year)
        },
        function (error) {
          console.log(error)
        }
      )
  }

  return {
    check: check,
    getMoments: getMoments
  }
}
