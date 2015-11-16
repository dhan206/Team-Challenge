/**
 * Created by dhan206 on 11/13/15.
 */

'use strict';

describe("Button feature", function() {

    beforeEach(function () {
        //navigate browser to the given url
        browser.get("http://localhost:8000");
    });

    it("should disable the button if there form is invalid", function() {

        var submit = element(by.id("submitButton"));
        var email = element(by.id("email"));
        var lastName = element(by.id("lastName"));
        var firstName = element(by.id("firstName"));
        var birthDate = element(by.id("birthDate"));
        var password = element(by.id("password"));
        var passwordConfirm = element(by.id("passwordConfirm"));
        var reset = element(by.id("resetButton"));

        expect(submit.isEnabled()).toEqual(false);

        email.sendKeys("dhan206@uw.edu");
        lastName.sendKeys("Han");
        firstName.sendKeys("Derek");
        birthDate.sendKeys("03/27/1995");
        password.sendKeys("password");
        passwordConfirm.sendKeys("password");

        expect(submit.isEnabled()).toEqual(true);

        reset.click();

        expect(submit.isEnabled()).toEqual(false);

    });

});

describe("Last name and e-mail input", function() {

    beforeEach(function () {
        //navigate browser to the given url
        browser.get("http://localhost:8000");
    });

    it("should give feedback if the e-mail and last name fields are not entered correctly", function() {
        var email = element(by.id("email"));
        var lastName = element(by.id("lastName"));

        email.sendKeys("kendall");

        expect((email, 'ng-invalid').toEqual(true));

        email.sendKeys("@uw.edu");

        expect((email, 'ng-invalid').toEqual(false));

        lastName.sendKeys('a');

        lastName.clear();

        expect((lastName, 'ng-invalid').toEqual(false));

        lastName.sendKeys('Reonal');

        expect((lastName, 'ng-invalid').toEqual(true));
    });

});

describe("Date validation", function() {

    beforeEach(function () {
        //navigate browser to the given url
        browser.get("http://localhost:8000");
    });


    it("should give feedback if the birth date entered is not a valid date", function() {
        var date = element(by.id("birthDate"));
        var isDateError = element(by.id("isDateError"));

        date.sendKeys("11/19/1994");

        expect(isDateError.isDisplayed()).toBeFalsy();

        date.clear();

        date.sendKeys("1925-11-19");

        expect(isDateError.isDisplayed()).toBeFalsy();

        date.clear();

        date.sendKeys("Illuminati is real");

        expect(isDateError.isDisplayed()).toBeTruthy();

    })

});

describe("Age validation", function() {

    beforeEach(function () {
        //navigate browser to the given url
        browser.get("http://localhost:8000");
    });

    it("should give feedback if the birth date entered is not 13 years old", function() {
        var date = element(by.id("birthDate"));
        var ageError = element(by.id("ageError"));
        var testDate = new Date();

        date.sendKeys("11/19/1994");

        expect(ageError.isDisplayed()).toBeFalsy();

        date.clear();

        date.sendKeys("1925-11-19");

        expect(ageError.isDisplayed()).toBeFalsy();

        date.clear();

        testDate.setTime(testDate.valueOf() - 410240038000);

        date.sendKeys(testDate.getMonth() + 1 + "/" + testDate.getDate() + "/" + testDate.getFullYear());

        expect(ageError.isDisplayed()).toBeFalsy();

        date.clear();

        testDate = new Date();

        testDate.setTime(testDate.valueOf() - 315569260000);

        date.sendKeys(testDate.getMonth() + 1 + "/" + testDate.getDate() + "/" + testDate.getFullYear());

        expect(ageError.isDisplayed()).toBeTruthy();

        date.clear();

        testDate = new Date();

        testDate.setTime((testDate.valueOf() - 410240038000) + 86400000);

        date.sendKeys(testDate.getMonth() + 1 + "/" + testDate.getDate() + "/" + testDate.getFullYear());

        expect(ageError.isDisplayed()).toBeTruthy();
        
    })

});

describe("Password Validation", function() {

    beforeEach(function () {
        //navigate browser to the given url
        browser.get("http://localhost:8000");
    });

    it("Should check if the password confirm field matches the password field", function() {
        var password = element(by.id("password"));
        var passwordConfirm = element(by.id("passwordConfirm"));
        var matchError = element(by.id("matchError"));

        password.sendKeys("password");
        passwordConfirm.sendKeys("password");
        expect(matchError.isDisplayed()).toBeFalsy();
        password.clear();
        passwordConfirm.clear();

        password.sendKeys("password");
        passwordConfirm.sendKeys("not a password");
        expect(matchError.isDisplayed()).toBeTruthy();
    })
});

