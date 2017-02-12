/* eslint no-undef: "off" */
(function () {
  'use strict'
  angular
    .module('urbykeApp')
    .factory('BikeFactory', BikeFactory)

  function BikeFactory ($http) {
    var service = {
      getBikeStations: getBikeStations,
      getStationDetails: getStationDetails
    }

    return service

// Methods from the factory
    function getBikeStations () {
      var url = 'https://api.citybik.es/v2/networks/bicing'

      return $http.get(url)
            .then(getResults)
              .then(getStations)
    }

    function getStationDetails (idStation) {
      return getBikeStations()
            .then(function (stations) {
              return stations.filter(function (station) {
                return station.uid === parseInt(idStation)
              })
            })
    }
  }

// Helper functions to filter result
  function getResults (response) {
    return response.data.network.stations
  }

  function getStations (stations) {
    return stations.map(function (elem) {
      var stationsInfo = {
        id: elem.id,
        name: elem.name,
        bikes: elem.free_bikes,
        slots: elem.empty_slots,
        latitude: elem.latitude,
        longitude: elem.longitude,
        uid: elem.extra.uid,
        nearByStation: elem.extra.NearbyStationList.map(function (elem) {
          return elem
        })
      }
      return stationsInfo
    })
  }
})()
