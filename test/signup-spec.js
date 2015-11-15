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
        var email = element(by.model("email"));
        var lastName = element(by.model("lastName"));
        var reset = element(by.id("resetButton"));

        lastName.sendKeys("han");

        expect(submit.isEnabled()).toEqual(false);

        email.sendKeys("dhan206");

        expect(submit.isEnabled()).toEqual(false);

        email.sendKeys("@");

        expect(submit.isEnabled()).toEqual(false);

        email.sendKeys("gmail.com");

        expect(submit.isEnabled()).toEqual(true);

        lastName.clear();

        expect(submit.isEnabled()).toEqual(false);

        lastName.sendKeys("han");

        expect(submit.isEnabled()).toEqual(true);

        reset.click();

        expect(submit.isEnabled()).toEqual(false);

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

        date.sendKeys("1925-11-19")

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
        var testDate = new Date()

        date.sendKeys("11/19/1994");

        expect(ageError.isDisplayed()).toBeFalsy();

        date.clear();

        date.sendKeys("1925-11-19")

        expect(ageError.isDisplayed()).toBeFalsy();

        date.clear();

        testDate.setTime(testDate.valueOf() - 410240038000);

        date.sendKeys(testDate.getMonth() + 1 + "/" + testDate.getDate() + "/" + testDate.getFullYear());

        expect(ageError.isDisplayed()).toBeFalsy();

        date.clear();

        testDate = new Date()

        testDate.setTime(testDate.valueOf() - 315569260000);

        date.sendKeys(testDate.getMonth() + 1 + "/" + testDate.getDate() + "/" + testDate.getFullYear());

        expect(ageError.isDisplayed()).toBeTruthy();

        date.clear();

        testDate = new Date()

        testDate.setTime((testDate.valueOf() - 410240038000) + 86400000);

        date.sendKeys(testDate.getMonth() + 1 + "/" + testDate.getDate() + "/" + testDate.getFullYear());

        expect(ageError.isDisplayed()).toBeTruthy();
        
    })

});

describe("Last name and e-mail input", function() { 

    it("should give feedback if the e-mail and last name fields are not entered correctly", function() {
        var email = element(by.model("email"));
        var lastName = element(by.model("lastName"));

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