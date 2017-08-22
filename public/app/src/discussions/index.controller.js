(function () {
  'use strict'

  angular
    .module('discussion.controller.index', [])
    .controller('DiscussionIndexController', [
      'Discussion',
      '$state',
      '$stateParams',
      DiscussionIndexController
    ])

  function DiscussionIndexController (Discussion) {
    this.discussions = Discussion.query()
    this.getDateString = getDateString
  }

  /* getDateString creates a Date object out of the parameters
    in discussion and returns a string formatted in a
    readable way.

    i.e. March 27, 2010
  */
  function getDateString (discussion) {
    var date = new Date(discussion.year, discussion.month, discussion.day)
    var options = { year: 'numeric', month: 'long', day: 'numeric' }
    return date.toLocaleDateString('en-US', options)
  }
})()
