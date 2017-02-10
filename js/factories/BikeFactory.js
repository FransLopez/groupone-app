/* eslint no-undef: "off" */
(function () {
  angular.module('urbykeApp')
.factory('BikeFactory', BikeFactory)

  function BikeFactory ($http) {
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

    return {
      getBikeStations: getBikeStations,
      getStationDetails: getStationDetails
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
