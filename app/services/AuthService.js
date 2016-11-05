angular.module('AuthService', [])
  .service('AuthService', function($http, $q) {

    this.allowUser = false;

    var users = [{
      'email': 'user@email.com',
      'password': '1234'

    }];

    var checkIfUserExists = function(email, password) {
      for (var i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
          return true;
        }
      }
      return false;
    }

    this.login = function(email, password) {
      if (checkIfUserExists(email, password)) {
        this.allowUser = true;
        return true;
      } else {
        return false;
      }
    }

    this.isAuthenticated = function() {
      if (this.allowUser) {
        return "Authenticated";

      } else {
        return $q.reject("Not Authenticated");
      }
    }

    this.logout = function() {
      this.allowUser = false;
    }

  });
