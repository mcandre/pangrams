'use strict';

var Set = require('collections/set');

function standardizeCase(string) {
  return string.toUpperCase();
}

exports.standardizeCase = standardizeCase;

function removePunctuation(graphemes, phrase) {
  var cleanPhrase = "";

  for (var i in phrase) {
    var p = phrase[i];

    if (graphemes.indexOf(p) !== -1) {
      cleanPhrase += p;
    }
  }

  return cleanPhrase;
}

exports.removePunctuation = removePunctuation;

function lipogram(graphemes, phrase) {
  var
  graphemesStandardized = standardizeCase(graphemes),
  phraseStandardized = removePunctuation(graphemesStandardized, standardizeCase(phrase)),
  graphemesSet = new Set(),
  phraseSet = new Set();

  for (var i in graphemesStandardized) {
    graphemesSet.add(graphemesStandardized[i]);
  }

  for (var i in phraseStandardized) {
    phraseSet.add(phraseStandardized[i]);
  }

  return graphemesSet.difference(phraseSet);
}

exports.lipogram = lipogram;

function isPangram(graphemes, phrase) {
  return lipogram(graphemes, phrase).equals(Set());
}

exports.isPangram = isPangram;

function isPerfectPangram(graphemes, phrase) {
  var
  graphemesStandardized = standardizeCase(graphemes),
  phraseStandardized = removePunctuation(graphemesStandardized, standardizeCase(phrase));

  return isPangram(graphemesStandardized, phraseStandardized) && graphemesStandardized.length === phraseStandardized.length;
}

exports.isPerfectPangram = isPerfectPangram;

var pangrams = {
  'english': {
    'graphemes': 'abcdefghijklmnopqrstuvwxyz',
    'pangrams': [
      'The quick brown fox jumps over the lazy dog.',
      'Pack my box with five dozen liquor jugs!',
      'Mr. Jock, TV quiz PhD, bags few lynx.',
      'Cwm fjord-bank glyphs vext quiz.'
    ],
    'lipograms': [
      'The quick brown fox jumped over the lazy dog.'
    ]
  },
  'german': {
    'graphemes': 'abcdefghijklmnopqrstuvwxyzäöüß',
    'pangrams': [
      'Victor jagt zwölf Boxkämpfer quer über den großen Sylter Deich'
    ],
    'lipograms': [
    ]
  },
  'japaneseHiragana': {
    'graphemes': 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑを',
    'pangrams': [
      'いろはにほへと ちりぬるを わかよたれそ つねならむ うゐのおくやま けふこえて あさきゆめみし ゑひもせす'
    ],
    'lipograms': [
    ]
  }
};

exports.pangrams = pangrams;
