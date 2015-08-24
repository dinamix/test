'use strict';

angular.module('jhiptestApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
