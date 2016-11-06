'use strict';

/* directives */
angular.module('app').directive('ngConfirm', [function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('click', function () {
                var message = attrs.ngConfirmMessage || 'Are you sure?';
                if (message && confirm(message)) {
                    scope.$apply(attrs.ngConfirm);
                }
            });
        }
    }
}]);

angular.module('WorkoutBuilder').directive('workoutTile', function () {
        return {
            restrict: 'E',
            templateUrl:'/partials/workoutbuilder/workout-tile.html'
        }
    });

angular.module('app').directive('remoteValidator', ['$parse', function ($parse) {
    return {
        require: 'ngModel',
        link: function (scope, elm, attr, ngModelCtrl) {
            var expfn = $parse(attr["remoteValidatorFunction"]);
            var validatorName = attr["remoteValidator"];
            ngModelCtrl.$asyncValidators[validatorName] =
                function (value) {
                    return expfn(scope, { 'value': value });
                }
        }
    }
}]);