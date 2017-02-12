/* eslint no-undef: "off" */
angular
  .module('urbykeApp')
  .config(configRoute)

function configRoute ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'js/templates/stations-list.html',
      controller: 'StationsListController',
      controllerAs: 'vm'
    })
    .when('/details/:idStation', {
      templateUrl: 'js/templates/details-station.html',
      controller: 'DetailsStationController',
      controllerAs: 'vm'
    })
    .otherwise('/')
}
