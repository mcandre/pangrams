# pangrams - a little linguistics toolkit

# ABOUT

A pangram is a phrase that uses all the letters of an alphabet, or all the syllables of a syllabary. For example, "The quick brown fox jumps over the lazy dog" contains all the letters of the English alphabet.

The pangrams library can test arbitrary phrases for

* [pangrams](https://en.wikipedia.org/wiki/Pangram)
* [lipograms](https://en.wikipedia.org/wiki/Lipogram)
* [pangrammatic lipograms](https://en.wikipedia.org/wiki/Lipogram#Pangrammatic_lipogram)
* [anagrams](https://en.wikipedia.org/wiki/Anagram)
* [isograms](https://en.wikipedia.org/wiki/Isogram)
* [heterograms](https://en.wikipedia.org/wiki/Heterogram_%28literature%29)

# EXAMPLES

```
$ node
> var pangrams = require('pangrams');
> pangrams.isAnagram('Torchwood', 'Doctor Who');
true
> pangrams.isPangram('abcdefghijklmnopqrstuvwxyz', 'The quick brown fox jumps over the lazy dog.');
true
> pangrams.isPangram('abcdefghijklmnopqrstuvwxyz', 'Pack my box with five dozen liquor jugs!');
true
> pangrams.isPangram('abcdefghijklmnopqrstuvwxyz', 'abc');
false
> pangrams.isPangram(pangrams.pangrams.german.graphemes, 'Victor jagt zwölf Boxkämpfer quer über den großen Sylter Deich');
true
> pangrams.isAnagram(pangrams.pangrams.english.graphemes, 'The quick brown fox jumps over the lazy dog.');
false
> pangrams.isAnagram(pangrams.pangrams.english.graphemes, 'Mr. Jock, TV quiz PhD, bags few lynx.');
true
> pangrams.pangrams.japaneseHiragana;
{ graphemes: 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑを',
  pangrams: [ 'いろはにほへと ちりぬるを わかよたれそ つねならむ うゐのおくやま けふこえて あさきゆめみし ゑひもせす' ] }
> pangrams.isAnagram(pangrams.pangrams.japaneseHiragana.graphemes, pangrams.pangrams.japaneseHiragana.pangrams[0]);
true
> pangrams.lipogram(pangrams.pangrams.english.graphemes, 'The quick brown fox jumped over the lazy dog.').toArray();
[ 'S' ]
> pangrams.isPangrammaticLipogram(pangrams.pangrams.english.graphemes, 'The quick brown fox jumped over the lazy dog.');
true
> pangrams.frequencies(pangrams.pangrams.english.graphemes, 'cat').toObject();
{ C: 1, A: 1, T: 1 }
```

# NPM

https://www.npmjs.com/package/pangrams

# INSTALL

```
$ npm install [-g] pangrams
```

# REQUIREMENTS

* [Node.js](http://nodejs.org/) 0.11.6+

## Optional

* [Ruby](https://www.ruby-lang.org) 2.3+
* [lili](https://rubygems.org/gems/lili)

E.g., `bundle install`

# EVEN MORE PANGRAMS

* [The Thousand Character Classic](https://en.wikipedia.org/wiki/Thousand_Character_Classic)
* [Clagnut](http://clagnut.com/blog/2380/)
* [Fun with Words](http://www.fun-with-words.com/pang_example.html)
