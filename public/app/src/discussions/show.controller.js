'use strict'

angular
  .module('discussions')
  .controller('DiscussionShowController', DiscussionShowController)

DiscussionShowController.$inject = ['$state', '$stateParams', '_discussion', '_moments']

function DiscussionShowController ($state, $stateParams, _discussion, _moments) {
  this.date = $stateParams
  this.discussion = _discussion
  this.moments = _moments
  this.isEmpty = isEmpty
  this.eventsExist = !this.isEmpty(this.moments.events) ||
                     !this.isEmpty(this.moments.births) ||
                     !this.isEmpty(this.moments.deaths)
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

  _moments: function (momentHandler, $stateParams) {
    return momentHandler.getMoments({
      month: $stateParams.month,
      day: $stateParams.day,
      year: $stateParams.year
    })
  }
}
