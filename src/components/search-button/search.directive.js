(function () {
  'use strict'

  angular
  .module('search.directive', [])
  .directive('search', search)

  search.$inject = []

  function search () {
    return {
      templateUrl: 'src/components/search-button/search.html',
      restrict: 'E',
      controller: 'SearchController',
      controllerAs: 'search'
    }
  } // end directive
})()
