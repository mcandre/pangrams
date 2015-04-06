# pangrams - phrases that contain all graphemes of a writing system

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
