'use strict';

var
assert = require('assert'),
pangrams = require('../lib/pangrams'),
Set = require('collections/set'),
Map = require('collections/map');

describe('pangrams', function() {
  describe('pangrams', function() {
    it('contents are all, in fact, pangrams', function() {
      for (var language in pangrams.pangrams) {
        var graphemes = pangrams.pangrams[language].graphemes;
        var pangramClaims = pangrams.pangrams[language].pangrams;

        for (var i in pangramClaims) {
          var pangramClaim = pangramClaims[i];

          assert.equal(
            true,
            pangrams.isPangram(
              graphemes,
              pangramClaim
            )
          );
        }
      }
    });
  });

  describe('isPangram', function() {
    it('should handle false positives', function() {
      assert.equal(
        false,
        pangrams.isPangram(
          pangrams.pangrams.english.graphemes,
          'abc'
        )
      );
    });

    it('should ignore case', function() {
      assert.equal(
        true,
        pangrams.isPangram(
          pangrams.pangrams.english.graphemes,
          pangrams.pangrams.english.pangrams[0]
        )
      );
    });

    it('should ignore punctuation', function() {
      assert.equal(
        true,
        pangrams.isPangram(
          pangrams.pangrams.english.graphemes,
          pangrams.pangrams.english.pangrams[1]
        )
      );
    });

    it('should handle unicode', function() {
      assert.equal(
        true,
        pangrams.isPangram(
          pangrams.pangrams.german.graphemes,
          pangrams.pangrams.german.pangrams[0]
        )
      );
    });
  });

  describe('isAnagram', function() {
    it('handle false positivies', function() {
      assert.equal(
        false,
        pangrams.isAnagram(
          pangrams.pangrams.english.graphemes,
          pangrams.pangrams.english.pangrams[0]
        )
      );

      assert.equal(
        false,
        pangrams.isPerfectPangram(
          pangrams.pangrams.english.graphemes,
          pangrams.pangrams.english.pangrams[0]
        )
      );
    });

    it('handle true positivies', function() {
      assert.equal(
        true,
        pangrams.isAnagram(
          pangrams.pangrams.english.graphemes,
          pangrams.pangrams.english.pangrams[2]
        )
      );

      assert.equal(
        true,
        pangrams.isAnagram(
          pangrams.pangrams.japaneseHiragana.graphemes,
          pangrams.pangrams.japaneseHiragana.pangrams[0]
        )
      );
    });
  });

  describe('lipogram', function() {
    it('should handle true positives', function() {
      assert.equal(
        true,
        Set(['S']).equals(
          pangrams.lipogram(
            pangrams.pangrams.english.graphemes,
            pangrams.pangrams.english.lipograms[0]
          )
        )
      );

      assert.equal(
        true,
        Set().equals(
          pangrams.lipogram(
            pangrams.pangrams.english.graphemes,
            pangrams.pangrams.english.pangrams[0]
          )
        )
      );
    });
  });

  describe('isPangrammaticLipogram', function() {
    it('should handle true positives', function() {
      assert.equal(
        true,
        pangrams.isPangrammaticLipogram(
          pangrams.pangrams.english.graphemes,
          pangrams.pangrams.english.lipograms[0]
        )
      );
    });
  });

  describe('isogram', function() {
    it('should handle true positives', function() {
      assert.equal(
        true,
        Map({ 'C': 1, 'A': 1, 'T': 1 }).equals(
          pangrams.frequencies(
            pangrams.pangrams.english.graphemes,
            pangrams.pangrams.english.isograms[0]
          )
        )
      );

      assert.equal(
        true,
        Map({ 'A': 2, 'R': 2, 'I': 2, 'G': 2, 'N': 2 }).equals(
          pangrams.frequencies(
            pangrams.pangrams.english.graphemes,
            pangrams.pangrams.english.isograms[1]
          )
        )
      );
    });
  });

  describe('isogram', function() {
    it('should handle true positives', function() {
      assert.equal(
        true,
        Set([1]).equals(
          pangrams.isogram(
            pangrams.pangrams.english.graphemes,
            pangrams.pangrams.english.isograms[0]
          )
        )
      );

      assert.equal(
        true,
        Set([2]).equals(
          pangrams.isogram(
            pangrams.pangrams.english.graphemes,
            pangrams.pangrams.english.isograms[1]
          )
        )
      );
    });
  });

  describe('heterogram', function() {
    it('should handle true positives', function() {
      assert.equal(
        true,
        pangrams.isHeterogram(
          pangrams.pangrams.english.graphemes,
          pangrams.pangrams.english.isograms[0]
        )
      );
    });

    it('should handle true negatives', function() {
      assert.equal(
        false,
        pangrams.isHeterogram(
          pangrams.pangrams.english.graphemes,
          pangrams.pangrams.english.isograms[1]
        )
      );
    });
  });
});
