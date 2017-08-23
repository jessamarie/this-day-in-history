'use strict'

angular
.module('shuffle')
.directive('shuffle', shuffle)

shuffle.$inject = []

function shuffle () {
  return {
    templateUrl: 'app/src/components/shuffle-button/shuffle.html',
    restrict: 'E',
    controller: 'ShuffleController',
    controllerAs: 'shuffle'
  }
} // end directive
