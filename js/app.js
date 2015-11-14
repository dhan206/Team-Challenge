/**
 * Created by dhan206 on 11/13/15.
 */

"use strict";

angular.module("SignUpApp", [])

    .controller("SignUpCtrl", ['$scope', function($scope) {

        $scope.submitted = false;

        $scope.form = {
            email: "",
            firstName: "",
            lastName: "",
            birthDate: "",
            password: "",
            passwordConfirm: ""
        };

        var defaultForm = angular.copy($scope.form);

        $scope.submitForm = function(form) {
            if(form.valid) {
                $scope.submitted = true;
            }
        };

        $scope.resetForm = function() {
            $scope.form = angular.copy(defaultForm);
            $scope.signUpForm.$setPristine();
        };

        $scope.clearAlert = function() {
            $scope.submitted = false;
        }
    }]);