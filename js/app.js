/* global angular */
'use strict'

angular
  .module('history', [
    'ui.router',
    'ngResource'
  ])
  .config([
    '$stateProvider',
    RouterFunction
  ])
  .controller('FactIndexController', [
    'Fact',
    FactIndexControllerFunction
  ])
  .controller('FactShowController', [
    'Fact',
    '$stateParams',
    FactShowControllerFunction
  ])
  .factory('Fact', [
    '$resource',
    factService
  ])

function factService ($resource) {
  return {
    get: get
  }

  function get (month, day) {
    var url = 'http://history.muffinlabs.com/date/' + month + '/' + day

    var resource = $resource(url, { callback: 'JSON_CALLBACK' }, {
      getMoments: {
        method: 'JSONP',
        isArray: false
      }
    })

    return resource.getMoments().$promise.then(
        function (moments) {
          return moments
        },
        function (error) {
          console.log(error)
        }
      )
  }
}

function RouterFunction ($stateProvider) {
  $stateProvider
  .state('factIndex', {
    url: '/facts',
    templateUrl: 'js/ng-views/index.html',
    controller: 'FactIndexController',
    controllerAs: 'vm'
  })
  .state('factShow', {
    url: '/facts/:month/:day',
    templateUrl: 'js/ng-views/show.html',
    controller: 'FactShowController',
    controllerAs: 'vm'
  })
}

function FactIndexControllerFunction (Fact) { }

function FactShowControllerFunction (Fact, $stateParams) {
  this.fact = Fact.get($stateParams.month, $stateParams.day)
  console.log(this.fact)
}
