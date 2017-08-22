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
      .state('discussionShow', {
        url: '/discussions/:id',
        templateUrl: 'app/src/discussions/ng-views/show.html',
        controller: 'DiscussionShowController',
        controllerAs: 'vm'
      })
  }
})()
