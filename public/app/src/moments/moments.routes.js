'use strict'

angular
  .module('moments')
  .config(Router)

Router.$inject = ['$stateProvider']

function Router ($stateProvider) {
  $stateProvider
      .state('momentShow', {
        url: '/date/:month/:day/:year',
        templateUrl: 'app/src/moments/ng-views/show.html',
        controller: 'MomentShowController',
        controllerAs: 'vm'
      })
}
