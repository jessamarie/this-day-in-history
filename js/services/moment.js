'use strict';

(function () {
  angular
    .module('history')
    .factory('Moment', [
      '$resource',
      momentService
    ])

  function momentService ($resource) {
    return {
      get: get
    }

    function get (month, day) {
      var url = 'http://history.muffinlabs.com/date/' + month + '/' + day

      var resource = $resource(url, { callback: 'JSON_CALLBACK' }, {
        getMoments: {
          method: 'JSONP',
          isArray: false
        }
      })

      return resource.getMoments().$promise.then(
          function (moments) {
            return moments
          },
          function (error) {
            console.log(error)
          }
        )
    }
  }
})()
