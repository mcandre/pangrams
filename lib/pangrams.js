'use strict';

var
Set = require('collections/set'),
Map = require('collections/map'),
c = require('rho-contracts');

var standardizeCase = c.fun({ s: c.string })
      .returns(c.string)
      .wrap(
        function(s) {
          return s.toUpperCase();
        }
      );

exports.standardizeCase = standardizeCase;

var removePunctuation = c.fun({ graphemes: c.string }, { phrase: c.string })
      .returns(c.string)
      .wrap(
        function(graphemes, phrase) {
          var cleanPhrase = "";

          for (var i in phrase) {
            var p = phrase[i];

            if (graphemes.indexOf(p) !== -1) {
              cleanPhrase += p;
            }
          }

          return cleanPhrase;
        }
      );

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

var isPangram = c.fun({ graphemes: c.string }, { phrase: c.string })
      .returns(c.bool)
      .wrap(
        function(graphemes, phrase) {
          return lipogram(graphemes, phrase).equals(Set());
        }
      );

exports.isPangram = isPangram;

var isPangrammaticLipogram = c.fun({ graphemes: c.string }, { phrase: c.string })
      .returns(c.bool)
      .wrap(
        function(graphemes, phrase) {
          return lipogram(graphemes, phrase).length == 1;
        }
      );

exports.isPangrammaticLipogram = isPangrammaticLipogram;

var isAnagram = c.fun({ graphemes: c.string }, { phrase: c.string })
      .returns(c.bool)
      .wrap(
        function(graphemes, phrase) {
          var
          graphemesStandardized = standardizeCase(graphemes),
          phraseStandardized = removePunctuation(graphemesStandardized, standardizeCase(phrase));

          return isPangram(graphemesStandardized, phraseStandardized) && graphemesStandardized.length === phraseStandardized.length;
        }
      );

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

var isHeterogram = c.fun({ graphemes: c.string }, { phrase: c.string })
      .returns(c.bool)
      .wrap(
        function(graphemes, phrase) {
          return isogram(graphemes, phrase).equals(Set([1]));
        }
      );

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
  },
  'russian': {
    'graphemes': 'АБВГДЕЁЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ',
    'pangrams': [
      'Эх, чужак, общий съём цен шляп (юфть) – вдрызг!'
    ]
  }
};

exports.pangrams = pangrams;
