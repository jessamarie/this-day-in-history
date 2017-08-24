'use strict';

(function () {
  angular
    .module('moments')
    .controller('MomentShowController', MomentShowController)

  MomentShowController.$inject = ['Moment', '$stateParams']

  function MomentShowController (Moment, $stateParams) {
    this.dateParams = $stateParams
    this.queryDateParams = {
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
      return Moment.get(self.queryDateParams).$promise.then(
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
              self.randomEvent = checkForEasterEgg(self.date, self.dateParams.month, self.dateParams.day, self.year)
              if (self.randomEvent !== null) {
                // do nothing, we have an easter egg
              } else if (!self.isEmpty(self.events)) {
                self.randomEvent = self.events[Math.floor(Math.random() * self.events.length)].text
              } else if (!self.isEmpty(self.births)) {
                self.randomEvent = self.births[Math.floor(Math.random() * self.births.length)].text
              } else if (!self.isEmpty(self.deaths)) {
                self.randomEvent = self.deaths[Math.floor(Math.random() * self.deaths.length)].text
              } else {
                // no easterEggs or events
                self.randomEvent = `${self.date}, ${self.year} was a very boring day.`
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

  const easterEggs = [
    {
      name: 'Nobody Special', // patrick
      month: '2',
      day: '20',
      year: '1994'
    },
    {
      name: 'Mitche',
      month: '4',
      day: '5',
      year: '1989'
    },
    {
      name: 'Alex',
      month: '7',
      day: '3',
      year: '1990'
    },
    {
      name: 'Tim',
      month: '8',
      day: '24',
      year: '1985'
    },
    {
      name: 'Colleen',
      month: '1',
      day: '11',
      year: '1985'
    },
    {
      name: 'Jacob',
      month: '8',
      day: '28',
      year: '1988'
    },
    {
      name: 'JD',
      month: '5',
      day: '25',
      year: '1986'
    },
    {
      name: 'Charlie',
      month: '11',
      day: '6',
      year: '1987'
    }
  ]

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
