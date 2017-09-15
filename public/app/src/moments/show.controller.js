'use strict';

(function () {
  angular
    .module('moments')
    .controller('MomentShowController', MomentShowController)

  MomentShowController.$inject = ['momentHandler', '$stateParams']

  function MomentShowController (momentHandler, $stateParams) {
    let self = this
    this.dateParams = $stateParams
    this.queryDateParams = {
      month: $stateParams.month,
      day: $stateParams.day
    }

    this.year = $stateParams.year

    let isEmpty = function (obj) {
      return angular.equals(obj, [])
    }

    let getRandomEvent = function (moment) {
      /* sets a random event that occured on this day */
      self.randomEvent = checkForEasterEgg(moment.date, self.dateParams.month, self.dateParams.day, self.year)
      if (self.randomEvent !== null) {
        // do nothing, we have an easter egg
      } else if (!isEmpty(moment.events)) {
        self.randomEvent = moment.events[Math.floor(Math.random() * moment.events.length)].text
      } else if (!isEmpty(moment.births)) {
        self.randomEvent = 'Birth: ' + moment.births[Math.floor(Math.random() * moment.births.length)].text
      } else if (!isEmpty(moment.deaths)) {
        self.randomEvent = 'Death: ' + moment.deaths[Math.floor(Math.random() * moment.deaths.length)].text
      } else {
        // no easterEggs or events
        self.randomEvent = `${self.date}, ${self.year} was a very boring day.`
      }
    }

    // loadMoments(this)
    momentHandler.getMoments($stateParams).then(getRandomEvent)
  }

  function checkForEasterEgg (date, month, day, year) {
    var eggs = easterEggs.filter((item) => {
      return month === item.month && day === item.day && year === item.year
    })

    if (angular.equals(eggs, [])) {
      return null
    } else {
      var person = eggs[0]
      return `${person.name}, was a born on this very day.`
    }
  }
})()
