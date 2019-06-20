angular.module('maqe', ['ngRoute', 'angularSimplePagination'])

    .filter('moment', function () {
        return function (input, momentFn) {
            var args = Array.prototype.slice.call(arguments, 2),
                momentObj = moment(input);
            return momentObj[momentFn].apply(momentObj, args);
        }
    })
    .controller('mainCtrl', function ($scope, $http) {
        $scope.date = new Date();
        $scope.settings = {
            currentPage: 0,
            offset: 0,
            pageLimit: 2,
            pageLimits: ['10', '20']
        };

        $http.get("http://maqe.github.io/json/authors.json")
            .then(function (response) {
                $scope.authors = response.data;
            });
        $http.get("http://maqe.github.io/json/posts.json")
            .then(function (response) {
                $scope.posts = response.data;
            });
    })


    .directive('ngEnter', function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if (event.which === 13) {
                    scope.$apply(function () {
                        scope.$eval(attrs.ngEnter);
                    });
                    event.preventDefault();
                }
            });
        };
    });