'use strict'

angular
    .module('comments')
    .config(Router)

Router.$inject = ['$stateProvider']

function Router ($stateProvider) {
  $stateProvider
      .state('commentsNew', {
        url: '/date/:month/:day/:year/discussions/:discussion_id/comments/new',
        templateUrl: 'app/src/comments/ng-views/new.html',
        controller: 'CommentNewController',
        controllerAs: 'vm'
      })
}
