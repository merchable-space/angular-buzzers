'use strict';
angular.module('main')
.controller('BuzzerCtrl', function ($rootScope, $timeout) {

  $rootScope.buzzerClass = 'blank';
  $rootScope.keypress = keypress;
  $rootScope.playerBuzzed = false;
  $rootScope.buzzerNoise = new Audio();

  function keypress (keyPress) {

    if ($rootScope.playerBuzzed === true) {
        return false;
    }

    // Space = 32
    // Enter = 13
    // Z = 90

    var keyCode = keyPress.keyCode;

    switch (keyCode) {
        case 32:
            $rootScope.playerBuzzed = true;
            $rootScope.buzzerClass = 'red';

            $rootScope.buzzerNoise = new Audio('main/audio/red.mp3');
            $rootScope.buzzerNoise.play();

            break;
        case 13:
            $rootScope.playerBuzzed = true;
            $rootScope.buzzerClass = 'blue';

            $rootScope.buzzerNoise = new Audio('main/audio/blue.mp3');
            $rootScope.buzzerNoise.play();

            break;
        case 90:
            $rootScope.playerBuzzed = true;
            $rootScope.buzzerClass = 'yellow';

            $rootScope.buzzerNoise = new Audio('main/audio/yellow.mp3');
            $rootScope.buzzerNoise.play();

            break;
        default:
            $rootScope.playerBuzzed = false;
            $rootScope.buzzerClass = 'blank';
    }

    $timeout(function () {
        $rootScope.buzzerClass = 'blank';
        $rootScope.playerBuzzed = false;
    }, 2000 );
  }
});
