'use strict';

/*
  For our data we chose to use this API:
  http://history.muffinlabs.com/

  which is based off the information found on wikipedia
*/

(function () {
  angular
    .module('moments.service', [])
    .factory('Moment', [
      '$resource',
      momentService
    ])

  function momentService ($resource) {
    var url = 'http://history.muffinlabs.com/date/:month/:day'

    return $resource(url, { callback: 'JSON_CALLBACK' }, {
      get: {
        method: 'JSONP',
        isArray: false
      }
    })
  }
})()
