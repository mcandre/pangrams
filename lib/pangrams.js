'use strict';

function isPangram(graphemes, phrase) {
  var
  commonGraphemesCase = graphemes.toUpperCase(),
  commonPhraseCase = phrase.toUpperCase();

  for (var i in commonGraphemesCase) {
    if (commonPhraseCase.indexOf(commonGraphemesCase[i]) === -1) {
      return false;
    }
  }

  return true;
}

exports.isPangram = isPangram;

function isPerfectPangram(graphemes, phrase) {
  var
  commonGraphemesCase = graphemes.toUpperCase(),
  commonPhraseCase = phrase.toUpperCase();

  for (var i in commonGraphemesCase) {
    if ((commonPhraseCase.match(new RegExp(commonGraphemesCase[i], 'g')) || []).length !== 1) {
      return false;
    }
  }

  return true;
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
    ]
  },
  'german': {
    'graphemes': 'abcdefghijklmnopqrstuvwxyzäöüß',
    'pangrams': [
      'Victor jagt zwölf Boxkämpfer quer über den großen Sylter Deich'
    ]
  },
  'japaneseHiragana': {
    'graphemes': 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑを',
    'pangrams': [
      'いろはにほへと ちりぬるを わかよたれそ つねならむ うゐのおくやま けふこえて あさきゆめみし ゑひもせす'
    ]
  }
};

exports.pangrams = pangrams;
