'use strict';

(function () {
  angular
    .module('moments.routes', [])
    .config([
      '$stateProvider',
      Router
    ])

  function Router ($stateProvider) {
    $stateProvider
      .state('momentShow', {
        url: '/date/:month/:day',
        templateUrl: 'js/moments/ng-views/show.html',
        controller: 'MomentShowController',
        controllerAs: 'vm'
      })
  }
})()
