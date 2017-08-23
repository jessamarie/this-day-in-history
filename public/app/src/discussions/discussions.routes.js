'use strict'

angular
    .module('discussions')
    .config(Router)

Router.$inject = ['$stateProvider']

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
        url: '/date/:month/:day/:year/discussions',
        templateUrl: 'app/src/discussions/ng-views/show.html',
        controller: 'DiscussionShowController',
        controllerAs: 'vm',
        resolve: DiscussionShowController.resolve
      })
}
