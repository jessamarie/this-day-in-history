'use strict'

angular
  .module('home')
  .config(Router)

Router.$inject = ['$stateProvider']

function Router ($stateProvider) {
  $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'app/src/home/ng-views/index.html',
        controller: 'HomeIndexController',
        controllerAs: 'vm'
      })
}
