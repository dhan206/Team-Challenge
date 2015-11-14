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