(function (module) {
   "use strict";

   module.config(["$stateProvider","$urlRouterProvider",
      function ($stateProvider, $urlRouterProvider) {

         $stateProvider
            .state("main", {
               url: "/",
               templateUrl: "views/pages/main.html",
               controller: "MainCtrl"
            })
            .state("setup", {
               url: "/setup",
               templateUrl: "views/pages/setup.html",
               controller: "SetupCtrl"
            })

         $urlRouterProvider.otherwise(function($injector){
            var $state = $injector.get("$state");
            $state.go('main');
         });
      }])

}(angular.module("madTrucker")));