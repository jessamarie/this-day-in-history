'use strict';

(function () {
  angular
    .module('history')
    .controller('MomentShowController', [
      'Moment',
      '$stateParams',
      MomentShowController
    ])

  function MomentShowController (Moment, $stateParams) {
    this.num = 5
    this.moment = Moment.get($stateParams.month, $stateParams.day)
    console.dir(this.moment)
  }
})()
