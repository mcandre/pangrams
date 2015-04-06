# pangrams - phrases that contain all graphemes of a writing system

# ABOUT

A [pangram](https://en.wikipedia.org/wiki/Pangram) is a phrase that uses all the letters of an alphabet, or all the syllables of a syllabary. For example, "The quick brown fox jumps over the lazy dog" contains all the letters of the English alphabet.

The pangrams library can test arbitrary phrases for pangrammaticality.

# EXAMPLES

```
$ node
> var pangrams = require('pangrams');
> pangrams.isPangram('abcdefghijklmnopqrstuvwxyz', 'The quick brown fox jumps over the lazy dog.');
true
> pangrams.isPangram('abcdefghijklmnopqrstuvwxyz', 'Pack my box with five dozen liquor jugs!');
true
> pangrams.isPangram('abcdefghijklmnopqrstuvwxyz', 'abc');
false
> pangrams.isPangram(pangrams.pangrams.german.graphemes, 'Victor jagt zwölf Boxkämpfer quer über den großen Sylter Deich');
true
> pangrams.isPerfectPangram(pangrams.pangrams.english.graphemes, 'The quick brown fox jumps over the lazy dog.');
false
> pangrams.isPerfectPangram(pangrams.pangrams.english.graphemes, 'Mr. Jock, TV quiz PhD, bags few lynx.');
true
> pangrams.pangrams.japaneseHiragana;
{ graphemes: 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑを',
  pangrams: [ 'いろはにほへと ちりぬるを わかよたれそ つねならむ うゐのおくやま けふこえて あさきゆめみし ゑひもせす' ] }
> pangrams.isPerfectPangram(pangrams.pangrams.japaneseHiragana.graphemes, pangrams.pangrams.japaneseHiragana.pangrams[0]);
true
```

# NPM

https://www.npmjs.com/package/pangrams

# INSTALL

```
$ npm install [-g] pangrams
```

# REQUIREMENTS

* [Node.js](http://nodejs.org/) 0.8+

# EVEN MORE PANGRAMS

* [The Thousand Character Classic](https://en.wikipedia.org/wiki/Thousand_Character_Classic)
* [Clagnut](http://clagnut.com/blog/2380/)
* [Fun with Words](http://www.fun-with-words.com/pang_example.html)
