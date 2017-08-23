'use strict'

angular
  .module('discussions')
  .controller('DiscussionShowController', DiscussionShowController)

DiscussionShowController.$inject = ['$state', '$stateParams', '_discussion', '_moments']

function DiscussionShowController ($state, $stateParams, _discussion, _moments) {
  this.date = $stateParams
  this.discussion = _discussion
  this.moments = _moments
  console.log(this.moments)
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
  },

  _moments: function (dateChecker, $stateParams) {
    return dateChecker.getMoments({
      month: $stateParams.month,
      day: $stateParams.day,
      year: $stateParams.year
    })
  }
}
