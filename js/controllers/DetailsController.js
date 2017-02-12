/* eslint no-undef: "off" */
(function () {
  'use strict'
  angular
    .module('urbykeApp')
    .controller('DetailsStationController', DetailsStationController)

  function DetailsStationController ($rootScope, $routeParams, BikeFactory) {
    var vm = this
    var idStation = $routeParams.idStation

    BikeFactory.getStationDetails(idStation)
      .then(function (response) {
        vm.details = response
      })
// Center Select Station
    $rootScope.$broadcast('centerSelectStation', idStation)
  }
})()
