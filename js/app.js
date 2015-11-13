/**
 * Created by dhan206 on 11/13/15.
 */

"use strict";

angular.module("SignUpApp", [])

    .controller("SignUpCtrl", ['$scope', function($scope) {

        $scope.submitForm = function(form) {
            if(form.$valid) {
                alert("valid form submitted");
            }
            alert("invalid");
        };
    }]);