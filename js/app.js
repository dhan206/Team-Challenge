/**
 * Created by dhan206 on 11/13/15.
 */

"use strict";

angular.module("SignUpApp", ['ui.bootstrap'])

    //sign up form controller
    .controller("SignUpCtrl", ['$scope', function($scope) {

        //submitted set to false
        $scope.submitted = false;

        $scope.dynamic = 0;

        //default empty form
        $scope.form = {
            email: "",
            firstName: "",
            lastName: "",
            birthDate: "",
            password: "",
            passwordConfirm: ""
        };

        //default form state
        var defaultForm = angular.copy($scope.form);

        //checks if birth date entered by is user is a valid date
        $scope.isDate = function() {
            if (($scope.signUpForm.birthDate.$viewValue.length) > 0) {
                // console.log(Date.parse($scope.signUpForm.birthDate.$viewValue))
                console.log(Math.abs(!new Date() - new Date($scope.signUpForm.birthDate.$viewValue)))
                return !isNaN(Date.parse($scope.signUpForm.birthDate.$viewValue))
            } else {
                return true;
            }

        }

        //checks if birth date entered by user is 13 years old
        $scope.isThirteen = function() {
            var today = new Date();
            if (!isNaN(Date.parse($scope.signUpForm.birthDate.$viewValue))) {
                return !(Math.abs(new Date() - new Date($scope.signUpForm.birthDate.$viewValue)) <= 410240376000);
            } else {
                return true;
            }
        };

        //sets submitted to true when form is submitted
        $scope.submitForm = function(form) {
            $scope.submitted = true;
        };

        //clears the input fields in the form
        $scope.resetForm = function() {
            $scope.form = angular.copy(defaultForm);
            $scope.signUpForm.$setPristine();
        };

        //remove the alert message
        $scope.clearAlert = function() {
            $scope.submitted = false;
        };

        //checks if the passwords match
        $scope.checkMatch = function() {
            return $scope.signUpForm.password.$viewValue == $scope.signUpForm.passwordConfirm.$viewValue;
        }

        $scope.checkStrength = function() {
            var password = $scope.signUpForm.password.$viewValue;
            var value = 0;
            var type = 'warning';
            var description = '';
            if (password.length > 0) {
                if (password.length < 5) {
                    value = 33;
                    type = 'danger';
                    description = 'Weak';
                } else if (password.length < 10) {
                    value = 66;
                    type = 'warning';
                    description = "Medium";
                } else {
                    value = 100;
                    type = 'success';
                    description = 'Strong';
                }
            }
            $scope.dynamic = value;
            $scope.type = type;
            $scope.description = description;
        }

    }]);