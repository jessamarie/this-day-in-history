'use strict'

angular
  .module('moments')
  .controller('MomentShowController', MomentShowController)

MomentShowController.$inject = ['Moment', '$stateParams', '_moments']

function MomentShowController (Moment, $stateParams, _moments) {
  this.moments = _moments
  this.year = $stateParams.year

  this.easterEgg = checkForEasterEgg($stateParams.month, $stateParams.day, this.year)

  if (isEmpty(this.moments.events) && isEmpty(this.moments.births) &&
      isEmpty(this.moments.deaths) && this.easterEgg === null) {
    this.boringDay = `${this.moments.date}, ${this.year} was a very boring day.`
  }
}

/*
  Add .resolve property to ctrl to attach to
  route and to resolve promise from history api
*/
MomentShowController.resolve = {
  _moments: function (momentHandler, $stateParams) {
    return momentHandler.getMoments({
      month: $stateParams.month,
      day: $stateParams.day,
      year: $stateParams.year
    })
  }
}

/* checks if an object is empty */
function isEmpty (obj) {
  return angular.equals(obj, [])
}

/*
 checkForEasterEgg checks that there is an 'birthday' event
 for WDI17 classmates and returns a string if true, null if false
*/
function checkForEasterEgg (month, day, year) {
  var eggs = easterEggs.filter((item) => {
    return month === item.month && day === item.day && year === item.year
  })

  if (isEmpty(eggs)) {
    return null
  } else {
    var person = eggs[0]
    return `${person.name}, was born on this very day.`
  }
}
