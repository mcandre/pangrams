"use strict";

function isPangram(alphabet, phrase) {
  var
  commonAlphabetCase = alphabet.toUpperCase(),
  commonPhraseCase = phrase.toUpperCase();

  for (var i in commonAlphabetCase) {
    if (commonPhraseCase.indexOf(commonAlphabetCase[i]) == -1) {
      return false;
    }
  }

  return true;
}

exports.isPangram = isPangram;

var pangrams = {
  'english': {
    'alphabet': 'abcdefghijklmnopqrstuvwxyz',
    'pangrams': [
      'The quick brown fox jumps over the lazy dog.',
      'Pack my box with five dozen liquor jugs!'
    ]
  }
};

exports.pangrams = pangrams;
