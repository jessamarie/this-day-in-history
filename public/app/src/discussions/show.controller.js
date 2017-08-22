'use strict'

angular
  .module('discussions')
  .controller('DiscussionShowController', [
    '$state',
    '$stateParams',
    DiscussionShowController
  ])

function DiscussionShowController () {
    // this.discussions = Discussion.query()
    // console.log(this.discussions)

    // this.discussion = new Discussion()

    // this.create = function () {
    //   this.discussion.$save().then((res) => {
    //     // $state.go('songsShow', { id: res.id })
    //   })
}
