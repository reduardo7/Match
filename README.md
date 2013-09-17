Matcher
=======
QMatcher is a non-dependency javascript function. I built it to try to copy the find all function of the popular
text editor sublime text (ctrl+p) in windows or (command+p) in mac.
I just wanted to wrap each coincidence of a user input between html tags and the results was this nice function.

#### For example:
`
var matches = QMatcher([
  'John', 'Jason', 'Amber', 'Stacy'
], 'o', 'strong');
`

The result would be something like this:

`
[ 'J<strong>o</strong>hn', 'Jas<strong>o</strong>n' ]
`
