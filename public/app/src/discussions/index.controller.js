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
    console.log(this.discussions)

    this.discussion = new Discussion()

    this.getDateString = function (discussion) {
      var date = new Date(discussion.year, discussion.month, discussion.day)
      var options = { year: 'numeric', month: 'long', day: 'numeric' }
      return date.toLocaleDateString('en-US', options)
    }

    this.create = function () {
      this.discussion.$save().then((res) => {
      })
    }
    // this.message = "Hi I'm a message"
  }
})()
