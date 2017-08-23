'use strict'

angular
  .module('home')
  .config(Router)

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

function Router ($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true)
  $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/src/home/ng-views/index.html',
        controller: 'HomeIndexController',
        controllerAs: 'vm'
      })
  $urlRouterProvider.otherwise('')
}
