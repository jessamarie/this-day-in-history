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

    this.create = function () {
      this.discussion.$save().then((res) => {
        // $state.go('songsShow', { id: res.id })
      })
    }
    // this.message = "Hi I'm a message"
  }
})()
