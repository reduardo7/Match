;(function(window) {
  "use strict";

  var rescape = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/,
      rgroup = /[a-zA-Z0-9]/gi;

  function replaceWith(regexp, item, replace) {
    var matches, results = [], i;
    matches = item.match(regexp).slice(1);
    for (i = 0; i < matches.length; i++) {
      results.push((i % 2 === 1) ? replace.replace(/\%s/, matches[i]) : matches[i]);
    }
    return results.join("");
  }

  function Match(source, find, replace) {
    var results = [], replace, r, i;
    source = (Object.prototype.toString.call(source) === "[object Array]") ? source : [source]
    find = find || "";
    r = new RegExp(["(.*)",
      find.replace(rescape, "(\\$&)")
          .replace(rgroup, "($&)")
          .replace(/(\(.+?\))/g, "$1(.*)")
      ].join("")
    );
    if (typeof replace !== "string") {
      for (i = 0; i < source.length; i++) {
        if (r.test(source[i])) {
          results.push(source[i]);
        }
      }
    }
    else {
      for (i = 0; i < source.length; i++) {
        if (r.test(source[i])) {
          results.push(replaceWith(source[i]));
        }
      }
    }
    return results;
  }

  window.Match = Match;

})(window);
