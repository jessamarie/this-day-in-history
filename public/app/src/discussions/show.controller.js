'use strict'

angular
  .module('discussions')
  .controller('DiscussionShowController', DiscussionShowController)

DiscussionShowController.$inject = ['$state', '$stateParams', '_discussion']

function DiscussionShowController ($stateParams, _discussion) {
  this.date = $stateParams
  this.discussion = _discussion
  console.log(this.discussion)
  if (this.discussions === null) {
    this.create()
  }
    // this.discussions = Discussion.query()
    // console.log(this.discussions)

  // this.discussion = new Discussion()

  this.create = function () {
    this.discussion.$save(this.date).then((res) => {
      $state.go('discussionsShow', this.date)
    })
  }
}

/*
  Add .resolve property to ctrl to attach to
  route and to resolve promise from
  /api/discussions/:id
*/
DiscussionShowController.resolve = {
  _discussion: function (Discussion, $stateParams) {
    var date = $stateParams
    var data = Discussion.get(date)
    console.log(data)
    return Discussion.get(date)
  }
}
