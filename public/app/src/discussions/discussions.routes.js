(function () {
  'use strict'

  angular
    .module('discussion.routes', [])
    .config([
      '$stateProvider',
      Router
    ])

  function Router ($stateProvider) {
    $stateProvider
      .state('discussionsIndex', {
        url: '/discussions',
        templateUrl: 'app/src/discussions/ng-views/index.html',
        controller: 'DiscussionIndexController',
        controllerAs: 'vm'
      })
      .state('discussionsShow', {
        url: '/discussions/:id',
        templateUrl: 'app/src/discussions/ng-views/show.html',
        controller: 'DiscussionShowController',
        controllerAs: 'vm'
      })
  }
})()
