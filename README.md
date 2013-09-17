Matcher
=======

![http://jsfiddle.net/tujamaica/rmznm/embedded/result/](https://www.dropbox.com/s/tbcsx9betbxaaq6/qmatcher-preview.png?dl=1)

QMatcher is a non-dependency javascript function. I built it to try to copy the find all function of the popular
text editor sublime text (ctrl+p) in windows or (command+p) in mac.
I just wanted to wrap each coincidence of a user input between html tags and, as result, i came up was this nice little function.

#### For example:
```Javascript
var matches = QMatcher([
  'John', 'Jason', 'Amber', 'Stacy'
], 'o', 'strong');
```

The result would be something like this:

```Javascript
[ 'J<strong>o</strong>hn', 'Jas<strong>o</strong>n' ]
```

If you only need the coincidences without wrapping them, just pass false as the third parameter.

```Javascript
var matches = QMatcher([
  'John', 'Jason', 'Amber', 'Stacy'
], 'a', false);
```

The result would be something like this:

```Javascript
[ 'Jason', 'Amber', 'Stacy' ]
```

It will always return an array, but you can choose to pass, as the source, an array or a string.

```Javascript
var matches = QMatcher('thisIsMyCoolStringSource', 'tmcss', 'b');
```

The above code will return the following:

```Javascript
[ '<b>t</b>hisIs<b>M</b>y<b>C</b>ool<b>S</b>tring<b>S</b>ource' ]
```
