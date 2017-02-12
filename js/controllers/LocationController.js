/* eslint no-undef: "off" */
(function () {
  angular.module('urbykeApp')
.controller('LocationController', LocationController)

  function LocationController ($scope, BikeFactory, NgMap) {
    var vm = this

    BikeFactory.getBikeStations()
      .then(function (response) {
        vm.allStationsInfo = response
      })

    vm.centerMap = 'current-position'

    $scope.$on('centerSelectStation', function (event, idStation) {
      BikeFactory.getStationDetails(idStation)
        .then(function (response) {
          var centerMap = response[0].latitude + ',' + response[0].longitude
          vm.centerMap = centerMap
        })
    })
  }
})()
