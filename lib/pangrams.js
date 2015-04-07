'use strict';

var
Set = require('collections/set'),
Map = require('collections/map');

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

function isPangrammaticLipogram(graphemes, phrase) {
  return lipogram(graphemes, phrase).length == 1;
}

exports.isPangrammaticLipogram = isPangrammaticLipogram;

function isAnagram(graphemes, phrase) {
  var
  graphemesStandardized = standardizeCase(graphemes),
  phraseStandardized = removePunctuation(graphemesStandardized, standardizeCase(phrase));

  return isPangram(graphemesStandardized, phraseStandardized) && graphemesStandardized.length === phraseStandardized.length;
}

exports.isAnagram = isAnagram;

exports.isPerfectPangram = isAnagram;

function frequencies(graphemes, phrase) {
  var
  graphemesStandardized = standardizeCase(graphemes),
  phraseStandardized = removePunctuation(graphemesStandardized, standardizeCase(phrase)),
  phraseFrequencies = Map();

  for (var i in phraseStandardized) {
    var p = phraseStandardized[i];

    if (phraseFrequencies.has(p)) {
      phraseFrequencies.set(p, phraseFrequencies.get(p) + 1);
    }
    else {
      phraseFrequencies.set(p, 1);
    }
  }

  return phraseFrequencies;
}

exports.frequencies = frequencies;

function isogram(graphemes, phrase) {
  return Set(frequencies(graphemes, phrase).values());
}

exports.isogram = isogram;

function isHeterogram(graphemes, phrase) {
  return isogram(graphemes, phrase).equals(Set([1]));
}

exports.isHeterogram = isHeterogram;

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
    ],
    'isograms': [
      'cat',
      'arraigning'
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
