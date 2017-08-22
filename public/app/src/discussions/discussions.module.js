(function () {
  'use strict'

  angular
    .module('discussion', [
      'discussion.routes',
      'discussion.service',
      'discussion.controller.index',
      'discussion.controller.show'
    ])
})()
