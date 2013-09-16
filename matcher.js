(function (window) {
 
    'use strict';
 
    function Matcher(source, search, tag) {
        // Set the default wrapper tag
        tag = tag === false ? tag :
            typeof tag === 'string' ? tag : 'strong';
        // Transform the source into an iterable array
        source = !(source instanceof Array) ? [source] : source;
 
        // Variable declaration
        var results, matches, tmpl, opts, rx, i, e;
 
        // Split search input into an array
        opts = search.split('');
        // Iterate over each character and scape it
        for (i = 0; i < opts.length; i++) {
            opts[i] = '(' + opts[i].replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") + ')';
        }
        // Build the regular expression
        rx = new RegExp(opts.join('(.*?)'), 'gi');
 
        // We always return an array of matches
        results = [];
        // Iterate over each source
        for (i = 0; i < source.length; i++) {
            // Look for a match
            if (rx.test(source[i])) {
                // Add the normal or wrapped match to the results array
                results.push((tag !== false) ?
                    source[i].replace(rx, function () {
 
                    matches = [];
                    // Loop throught the matches and wrap them with a tag
                    for (e = 1; e < arguments.length - 2; e++) {
                        // Check if the current argument is a match
                        matches[e] = (e % 2 === 1) ?
                            ('<' + tag + '>' + arguments[e] + '</' + tag + '>') :  arguments[e];
                    }
                    // Return the new wrapped match
                    return matches.join('');
                }) : source[i]); // Else return the normal match
            }
        }
 
        return results;
    }
 
    window.Matcher = Matcher;
 
}(window));
