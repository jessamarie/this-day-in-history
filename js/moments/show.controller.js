'use strict';

(function () {
  angular
    .module('history')
    .controller('FactShowController', [
      'Fact',
      '$stateParams',
      FactShowController
    ])

  function FactShowController (Fact, $stateParams) {
    this.num = 5
    this.fact = Fact.get($stateParams.month, $stateParams.day)
    console.dir(this.fact)
  }
})()
