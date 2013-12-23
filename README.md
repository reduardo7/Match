Match
=======
[ ![your alt][1]](http://jsfiddle.net/tujamaica/rmznm/embedded/result/)

[1]: https://www.dropbox.com/s/tbcsx9betbxaaq6/qmatcher-preview.png?dl=1

Match is a non-dependency javascript function. I wrote it to try to copy the find all function of the popular
text editor sublime text (ctrl+p) in windows, linux or (command+p) in mac.
I just wanted to wrap each coincidence of a given set of characters between html tags and, as result, i came up was this nice little function.

**It is not a graphical plugin, just a function that returns some results**. Here is a [demo](http://jsfiddle.net/tujamaica/rmznm/embedded/result/) and you can edit it [here](http://jsfiddle.net/tujamaica/rmznm/) with jsfiddle.

#### Syntax & Arguments
There are only two required arguments to be passed. The first one is the source on which the function will be searching against. It can be a string or an array of strings. The second one, is what you are trying to find or match. The third parameter is optional and it must be an object. It takes some flags that kinda formats the coincidences (case sensitive, sorting, templating). 
```Javascript
Match( Array source, String search [, Object options ] );
```

#### Example:
```Javascript
var matches = Match([
  'John', 'Jason', 'Amber', 'Stacy'
], 'o', { template: '<strong>%s</strong>' });
```

The result would be something like this:

```Javascript
[ 'J<strong>o</strong>hn', 'Jas<strong>o</strong>n' ]
```

If you only need the coincidences without wrapping them, just omit the template flag.

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
var matches = Match('thisIsMyCoolStringSource', 'tmcss', {
  template: '<b>%s</b>'
});
```

The above code will return the following:

```Javascript
[ '<b>t</b>hisIs<b>M</b>y<b>C</b>ool<b>S</b>tring<b>S</b>ource' ]
```

By default, Match is case insensitive, but you can turn it off and make it case sensitive by passing caseSensitive: true. **Note that case sensitive is much faster than case insensitive**.

```Javascript
var matches = Match([ 'tujamaica', 'tujaMaica' ], 'M', {
  template: '<strong>%s</strong>',
  caseSensitive: true
});
```

In this case, you'll get this:
```Javascript
[ 'tujaMaica' ]
```

You can also ask for an ordered list of matches. You can do it by passing sort: 'asc' or 'desc'.

```Javascript
var matches = Match([ 'stacy', 'bee', 'amy', 'julie' ], 'a', {
  sort: 'asc'
});
```

The output:

```Javascript
[ 'amy', 'stacy' ]
```

Perhaps you need a more complex replacement, so you could do something like this:

```Javascript
var template = '<a href="#"><strong><i><span>%s</span></i></strong></a>',
    matches = Match([
      'John', 'Jason', 'Amber', 'Stacy'
    ], 'a', { template: template });
```

... and well, you already know what it returns. Each coincidence (each character) will be injected in the %s placeholder of your template.

Hope you like it, cheers.
