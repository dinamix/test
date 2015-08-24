'use strict';

angular.module('jhiptestApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


