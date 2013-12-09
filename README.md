Match
=======
[ ![your alt][1]](http://jsfiddle.net/tujamaica/rmznm/embedded/result/)

[1]: https://www.dropbox.com/s/tbcsx9betbxaaq6/qmatcher-preview.png?dl=1

Match is a non-dependency javascript function. I wrote it to try to copy the find all function of the popular
text editor sublime text (ctrl+p) in windows or (command+p) in mac.
I just wanted to wrap each coincidence of a user input between html tags and, as result, i came up was this nice little function.

It is not a graphical plugin, just a function that returns some results. Here is a [demo](http://jsfiddle.net/tujamaica/rmznm/embedded/result/) and you can edit it [here](http://jsfiddle.net/tujamaica/rmznm/) with jsfiddle.

#### For example:
```Javascript
var matches = Match([
  'John', 'Jason', 'Amber', 'Stacy'
], 'o', '<strong>%s</strong>');
```

The result would be something like this:

```Javascript
[ 'J<strong>o</strong>hn', 'Jas<strong>o</strong>n' ]
```

If you only need the coincidences without wrapping them, just omit the third parameter.

```Javascript
var matches = Match([
  'John', 'Jason', 'Amber', 'Stacy'
], 'a');
```

The result would be something like this:

```Javascript
[ 'Jason', 'Amber', 'Stacy' ]
```

It will always return an array, but you can choose to pass, as the source, an array or a string.

```Javascript
var matches = Match('thisIsMyCoolStringSource', 'tmcss', '<b>%s</b>');
```

The above code will return the following:

```Javascript
[ '<b>t</b>hisIs<b>M</b>y<b>C</b>ool<b>S</b>tring<b>S</b>ource' ]
```

Perhaps you need a mor complex replacement, so you could do something like this:

```Javascript
var template = '<a href="#"><strong><i><span>%s</span></i></strong></a>',
    matches = Match([
      'John', 'Jason', 'Amber', 'Stacy'
    ], 'a', template);
```

... and well, you already know what it returns. Each coincidence (each character) will be injected in the %s placeholder of your template.

Hope you like it, Happy Coding!
