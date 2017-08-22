(function () {
  'use strict'

  angular
    .module('discussion.controller.show', [])
    .controller('DiscussionShowController', [
      'Discussion',
      '$state',
      '$stateParams',
      DiscussionShowController
    ])

  function DiscussionShowController (Discussion) {
    this.message = Discussion.query()
    console.log(this.message)
    // this.message = "Hi I'm a message"
  }
})()
