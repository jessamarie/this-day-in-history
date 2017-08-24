(function () {
  // local api route
  api_route = 'http://localhost:3000'
  // heroku api route
  // api_route = 'http://name.heroku.com'
  'use strict'

  angular
    .module('historyApp', [
      'ui.router',
      'ngResource',
      'home',
      'moments',
      'discussions',
      'shuffle',
      'search',
      'comments'
    ])

  easterEggs = [
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
    },
    {
      name: 'Frew',
      month: '5',
      day: '25',
      year: '1976'
    },
    {
      name: 'Perry',
      month: '3',
      day: '27',
      year: '1925'
    },
    {
      name: 'Luis',
      month: '9',
      day: '26',
      year: '1981'
    },
    {
      name: 'Liz',
      month: '1',
      day: '13',
      year: '1987'
    }
  ]
})()
