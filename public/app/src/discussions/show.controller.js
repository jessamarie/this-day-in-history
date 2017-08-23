'use strict'

angular
  .module('discussions')
  .controller('DiscussionShowController', DiscussionShowController)

DiscussionShowController.$inject = ['$state', '$stateParams', 'Discussion', '_discussion', '_moments']

function DiscussionShowController ($state, $stateParams, Discussion, _discussion, _moments) {
  this.date = $stateParams
  this.discussion = _discussion
  console.log(this.discussion)
  this.moments = _moments
  this.isEmpty = isEmpty
  this.eventsExist = !this.isEmpty(this.moments.events) ||
                     !this.isEmpty(this.moments.births) ||
                     !this.isEmpty(this.moments.deaths)

  this.create = function () {
    var discussion = new Discussion(this.date)

    discussion.$save().then((res) => {
      $state.go('discussionsShow', this.date)
    })
  }

  if (angular.equals(this.discussion, {})) {
    this.create()
  }
}

function isEmpty (obj) {
  return angular.equals(obj, [])
}

/*
  Add .resolve property to ctrl to attach to
  route and to resolve promise from
  /api/discussions/:id
*/
DiscussionShowController.resolve = {
  _discussion: function (Discussion, $stateParams) {
    var date = $stateParams
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
