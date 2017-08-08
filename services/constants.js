(function (module) {
   "use strict";

   module.constant('CONSTANTS', {
      colors: ['red', 'green', 'purple', 'pink', 'orange', 'dark', 'cyan'],
      initialFunds: 1000,
      playerName: "Player",
      numberOfTruckers: 4,
      maxFunds: 1000000000,
      ride: {
         minPixel: 5,
         maxPixel: 20,
         timeout: 100 // msecs
      }
   })
}(angular.module('madTrucker')));