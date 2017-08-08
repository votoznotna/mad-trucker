(function (module) {
   "use strict";

   module.service('SETTINGS', ['CONSTANTS', function(CONSTANTS) {
      this.initialFunds = CONSTANTS.initialFunds,
      this.playerName =  CONSTANTS.playerName,
      this.numberOfTruckers = CONSTANTS.numberOfTruckers
   }])

}(angular.module('madTrucker')));