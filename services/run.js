(function (module) {
   "use strict";

   module.factory('run', [ 'CONSTANTS', function (CONSTANTS) {

      function getPixels() {
         var min = CONSTANTS.ride.minPixel,
         max = CONSTANTS.ride.maxPixel;
         min = Math.ceil(min);
         max = Math.floor(max);
         return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      var getWinner = function () {


         return '';
      };

      // Define the functions and properties to reveal.
      var service = {
         getWinner: getWinner,
         getPixels: getPixels
      };

      return service;
   }]);

}(angular.module('madTrucker')));