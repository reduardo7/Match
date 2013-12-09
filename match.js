;(function(window) {
  "use strict";

  function replace(find, rep, orig) {
    var indexOf = orig.indexOf(find);
    return orig.slice(0, indexOf) + rep + orig.slice(indexOf + find.length);
  }

  function Match(source, search, options) {
    options = options || {};
    var
    template = options.template,
    caseSensitive = options.caseSensitive || false,
    toLowerCase = (caseSensitive === true ? function(str) {
      return str;
    } : function(str) { return str.toLowerCase(); }),
    results = [],
    compile = (template != null && typeof template === "string"),
    slength, current, clength, token, lindex, schar, i, e;
    if (!(typeof source !== "string" && source.length != null)) {
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
        if (toLowerCase(schar) === toLowerCase(search.charAt(lindex))) {
          token.push([ e, schar ]);
          lindex++;
        }
      }
      if (token.length === search.length) {
        if (compile) {
          current = current.split("");

          for (e = 0; e < token.length; e++) {
            current.splice(token[e][0], 1, replace("%s", token[e][1], template));
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
