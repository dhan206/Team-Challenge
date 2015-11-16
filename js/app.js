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

        $scope.isDate = function() {
            if (($scope.signUpForm.birthDate.$viewValue.length) > 0) {
                // console.log(Date.parse($scope.signUpForm.birthDate.$viewValue))
                console.log(Math.abs(!new Date() - new Date($scope.signUpForm.birthDate.$viewValue)))
                return !isNaN(Date.parse($scope.signUpForm.birthDate.$viewValue))
            } else {
                return true;
            }

        }

        $scope.isThirteen = function() {
            var today = new Date();
            if (!isNaN(Date.parse($scope.signUpForm.birthDate.$viewValue))) {
                return !(Math.abs(new Date() - new Date($scope.signUpForm.birthDate.$viewValue)) <= 410240376000);
            } else {
                return true;
            }
        };

        $scope.submitForm = function(form) {
            $scope.submitted = true;
        };

        $scope.resetForm = function() {
            $scope.form = angular.copy(defaultForm);
            $scope.signUpForm.$setPristine();
        };

        $scope.clearAlert = function() {
            $scope.submitted = false;
        }

        $scope.checkMatch = function() {
            return $scope.signUpForm.password.$viewValue == $scope.signUpForm.passwordConfirm.$viewValue;
        }
    }]);