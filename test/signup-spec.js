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
        var button = element(by.id("submitButton"));

        expect(button.isEnabled()).toEqual(false);
    });

});