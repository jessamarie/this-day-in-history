'use strict'

angular
  .module('discussions')
  .controller('DiscussionShowController', DiscussionShowController)

DiscussionShowController.$inject = ['$state', '$stateParams', '_discussion', '_moments', 'Comment']

function DiscussionShowController ($state, $stateParams, _discussion, _moments, Comment) {
  this.date = $stateParams
  this.comment = new Comment()
  this.discussion = _discussion
  this.moments = _moments
  this.isEmpty = isEmpty
  this.easterEgg = checkForEasterEgg(this.date.month, this.date.day, this.date.year)
  this.eventsExist = !this.isEmpty(this.moments.events) ||
  !this.isEmpty(this.moments.births) || !this.isEmpty(this.moments.deaths) || this.easterEgg

  /* Creates a comment in the database */
  this.createComment = function () {
    let params = $stateParams
    params.discussion_id = _discussion.id

    this.comment.$save(params, function () {
      $state.go($state.current, {}, {reload: true})
    })
  }
  this.getDateString = function (date) {
    var date = new Date(date.year, date.month - 1, date.day)
    var options = { year: 'numeric', month: 'long', day: 'numeric' }
    return date.toLocaleDateString('en-US', options)
  }
}

function checkForEasterEgg (month, day, year) {
  var eggs = easterEggs.filter((item) => {
    return month === item.month && day === item.day && year === item.year
  })

  if (angular.equals(eggs, [])) {
    return null
  } else {
    var person = eggs[0]
    return `The Amazing ${person.name}, was a born on this very day.`
  }
}

/* checks if an object is empty */
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
