'use strict'

angular
    .module('discussions')
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
        controllerAs: 'vm',
        resolve: DiscussionIndexController.resolve
      })
      .state('discussionsShow', {
        url: '/discussions/:id',
        templateUrl: 'app/src/discussions/ng-views/show.html',
        controller: 'DiscussionShowController',
        controllerAs: 'vm'
      })
}

  // function discussionsPrepService (Discussion) {
  //   return Discussion.query()
  // }
