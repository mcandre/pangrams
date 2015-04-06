"use strict";

function isPangram(graphemes, phrase) {
  var
  commonGraphemesCase = graphemes.toUpperCase(),
  commonPhraseCase = phrase.toUpperCase();

  for (var i in commonGraphemesCase) {
    if (commonPhraseCase.indexOf(commonGraphemesCase[i]) == -1) {
      return false;
    }
  }

  return true;
}

exports.isPangram = isPangram;

var pangrams = {
  'english': {
    'graphemes': 'abcdefghijklmnopqrstuvwxyz',
    'pangrams': [
      'The quick brown fox jumps over the lazy dog.',
      'Pack my box with five dozen liquor jugs!'
    ]
  },
  'german': {
    'graphemes': 'abcdefghijklmnopqrstuvwxyzäöüß',
    'pangrams': [
      'Victor jagt zwölf Boxkämpfer quer über den großen Sylter Deich'
    ]
  }
};

exports.pangrams = pangrams;
