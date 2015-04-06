# pangrams - phrases that contain all graphemes of a writing system

# EXAMPLE

```
$ npm install
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
```