'use strict'

angular
.module('search')
.directive('search', search)

search.$inject = []

function search () {
  return {
    templateUrl: 'app/src/components/search/search.html',
    restrict: 'E',
    controller: 'SearchController',
    controllerAs: 'search'
  }
} // end directive
