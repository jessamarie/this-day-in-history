'use strict';

(function () {
  angular
    .module('home.routes', [])
    .config([
      '$stateProvider',
      Router
    ])

  function Router ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'js/home/ng-views/index.html',
        controller: 'HomeIndexController',
        controllerAs: 'vm'
      })
  }
})()
