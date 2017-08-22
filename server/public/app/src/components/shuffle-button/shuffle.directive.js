(function () {
  'use strict'

  angular
  .module('shuffle.directive', [])
  .directive('shuffle', shuffle)

  shuffle.$inject = []

  function shuffle () {
    return {
      templateUrl: 'src/components/shuffle-button/shuffle.html',
      restrict: 'E',
      controller: 'ShuffleController',
      controllerAs: 'shuffle'
    }
  } // end directive
})()
