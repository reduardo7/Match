;(function(window) {
  "use strict";

  function Match(source, search, template) {
    var

    results = [],
    compile = (template != null && typeof template === "string"),
    slength, current, clength, token, lindex, schar, i, e;

    if (Object.prototype.toString.call(source) !== "[object Array]") {
      source = [source];
    }
    slength = source.length;
    i = slength >>> 0;

    for (; i--;) {
      current = source[i];
      clength = current.length;
      lindex = 0;
      token = [];
      for (e = 0; e < clength; e++) {
        schar = current[e];
        if (schar === search.charAt(lindex)){
          token.push([ e, schar ]);
          lindex++;
        }
      }
      if (token.length === search.length) {
        if (compile) {
          current = current.split("");

          for (e = 0; e < token.length; e++) {
            current.splice(token[e][0], 1, template.replace(/\%s/, token[e][1]));
          }
          results.push(current.join(""));
        }
        else {
          results.push(current);
        }
      }
    }

    return results;
  }

  window.Match = Match;

})(window);
