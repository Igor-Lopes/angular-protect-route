(function() {
  angular.module('AngularRouting').controller('PageController', ['$scope', '$route', '$rootScope', '$http', '$window', '$location', 'AuthService', function($scope, $route, $rootScope, $http, $window, $location, AuthService) {

    $scope.logout = function() {
      AuthService.logout();
    }

  }]);
}());
