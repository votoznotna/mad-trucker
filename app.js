(function () {
   "use strict";
   var app = angular.module("madTrucker",["ui.router"])
      .run (['$rootScope', function($rootScope){
         $rootScope._ = window._;
      }])
      .constant('_', window._)
}());
