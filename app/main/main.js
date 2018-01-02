'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router'
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider, $urlRouterProvider) {

  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/buzzer');
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('main', {
      url: '/buzzer',
      templateUrl: 'main/templates/buzzer.html',
      controller: 'BuzzerCtrl as buzzCtrl'
    });
});
