/**
 * Created by dhan206 on 11/13/15.
 */

"use strict";

angular.module("SignUpApp", [])

    .controller("SignUpCtrl", ['$scope', function($scope) {

        $scope.submitted = false;

        $scope.submitForm = function(form) {
            if(form.valid) {
                $scope.submitted = true;
            }
        };

        $scope.clearAlert = function() {
            $scope.submitted = false;
        }
    }]);