(function() {

  var app = angular.module("AngularRouting", ['ngRoute', 'AuthService']).

  config(function($routeProvider, $locationProvider) {
    $routeProvider

      .when("/", {

      templateUrl: "./templates/auth.html",
      controller: "LoginController"
    })

    .when("/page-1", {

      templateUrl: "./templates/page-1.html",
      controller: "PageController",
      resolve: {
        access: function(AuthService) {
          return AuthService.isAuthenticated();
        }
      }
    })

    .when("/page-2", {
      templateUrl: "./templates/page-2.html",
      controller: "PageController",
      resolve: {
        access: function(AuthService) {
          return AuthService.isAuthenticated();
        }
      }
    })

    .otherwise({
      redirectTo: '/'
    });
  })

  .run(function($rootScope, $location, AuthService) {

    $rootScope.$on("$routeChangeStart", function(event, next, current) {
      console.log("Route Start");
    });

    $rootScope.$on("$routeChangeError", function(event, current, previous, rejection) {
      console.log("Route Change Error: " + rejection);
      $location.path("/");
    });

    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
     if(typeof previous != 'undefined'){
         console.log("Previous Url: " + previous.originalPath);
     }
        console.log("Current Url: " + current.originalPath);
    });

    $rootScope.$watch(function() {
      return AuthService.allowUser;
    }, function(newValue, oldValue) {
      if (!newValue) {
        $location.path("/");
      }
    }, true);

  });
})();