angular.module('myApp.service', [])

.factory('dataSource', ['$http', function ($http) {
    return {
        get: function (url, callback) {
            $http.jsonp(url)
                .success(function (data, status) {
                    callback(data);
                })
                .error(function (data, status) {
                    console.error('HTTP Error: ' + status);
                });
        }
    };
}]);