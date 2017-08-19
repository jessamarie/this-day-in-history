'use strict';

(function () {
  angular
    .module('history')
    .config([
      '$stateProvider',
      Router
    ])

  function Router ($stateProvider) {
    $stateProvider
      .state('factShow', {
        url: '/facts/:month/:day',
        templateUrl: 'js/moments/ng-views/show.html',
        controller: 'FactShowController',
        controllerAs: 'vm'
      })
  }
})()
