/* global angular */
'use strict'

angular
  .module('history', [
    'ui.router',
    'ngResource'
  ])
  .config([
    '$stateProvider',
    RouterFunction
  ])
  .controller('FactIndexController', [
    'Fact',
    FactIndexControllerFunction
  ])
  .controller('FactShowController', [
    'Fact',
    '$stateParams',
    FactShowControllerFunction
  ])
  .factory('Fact', [
    '$http',
    '$sce',
    factService
  ])

function factService ($http, $sce) {
  var url = 'http://history.muffinlabs.com/date'
  var trustedUrl = $sce.trustAsResourceUrl(url)

  return {
    get: get
  }

  function get () {
    $http.jsonp(trustedUrl, {jsonpCallbackParam: 'callback'})
      .success(function (data) {
        console.log(data)
        return data
      })
    .error(function (data) {
      console.log('failure')
    })
  }
  //   $http({
  //     url: $sce.trustAsResourceUrl(url),
  //     method: 'JSONP'
  //   }).then(
  //  function (data) {
  //    $scope.myData = data
  //    console.log(data);
  //  },
  //  function (error) {
  //     // manage error
  //  }
// )
    // $http.jsonp(trustedUrl, {jsonpCallbackParam: 'callback'})
    //     .success(function (data) {
    //       console.log(data.found)
    //     })
//  }
  // return $resource('http://history.muffinlabs.com/date', {}, {
  //   jsonp_query: {
  //     method: 'JSONP'
  //   }
  // })
}

function RouterFunction ($stateProvider) {
  $stateProvider
  .state('factIndex', {
    url: '/facts',
    templateUrl: 'js/ng-views/index.html',
    controller: 'FactIndexController',
    controllerAs: 'vm'
  })
  .state('factShow', {
    url: '/facts/:month/:day',
    templateUrl: 'js/ng-views/show.html',
    controller: 'FactShowController',
    controllerAs: 'vm'
  })
}

function FactIndexControllerFunction (Fact) {
  // this.facts = Fact.query()
  // console.log(this.facts)
}

function FactShowControllerFunction (Fact, $stateParams) {
  // this.fact = Fact.get({month: $stateParams.month, day: $stateParams.day })
  // console.log(this.fact)

  this.fact = Fact.get()

  // Fact.getEvent().then(function (data) {
  //   console.log('got data')
  //   console.log(data)
  // })
}
