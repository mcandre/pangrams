"use strict";

var
assert = require("assert"),
pangrams = require("../lib/pangrams");

describe("pangrams", function() {
  describe("isPangram", function() {
    it("should handle false positives", function() {
      assert.equal(
        false,
        pangrams.isPangram(
          pangrams.pangrams.english.alphabet,
          'abc'
        )
      );
    });

    it("should ignore case", function() {
      assert.equal(
        true,
        pangrams.isPangram(
          pangrams.pangrams.english.alphabet,
          pangrams.pangrams.english.pangrams[0]
        )
      );
    });

    it("should ignore punctuation", function() {
      assert.equal(
        true,
        pangrams.isPangram(
          pangrams.pangrams.english.alphabet,
          pangrams.pangrams.english.pangrams[1]
        )
      );
    });
  });
});
