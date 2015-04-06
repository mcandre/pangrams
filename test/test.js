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
          pangrams.pangrams.english.graphemes,
          'abc'
        )
      );
    });

    it("should ignore case", function() {
      assert.equal(
        true,
        pangrams.isPangram(
          pangrams.pangrams.english.graphemes,
          pangrams.pangrams.english.pangrams[0]
        )
      );
    });

    it("should ignore punctuation", function() {
      assert.equal(
        true,
        pangrams.isPangram(
          pangrams.pangrams.english.graphemes,
          pangrams.pangrams.english.pangrams[1]
        )
      );
    });

    it("should handle unicode", function() {
      assert.equal(
        true,
        pangrams.isPangram(
          pangrams.pangrams.german.graphemes,
          pangrams.pangrams.german.pangrams[0]
        )
      );
    });
  });
});
