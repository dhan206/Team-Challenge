/**
 * Created by dhan206 on 11/13/15.
 */

"use strict";

angular.module("SignUpApp", [])

    //sign up form controller
    .controller("SignUpCtrl", ['$scope', function($scope) {

        //submitted set to false
        $scope.submitted = false;

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
    }]);