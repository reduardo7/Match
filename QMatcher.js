/*jslint browser: true, plusplus: true, indent: 4 */

(function (window) {

    'use strict';

    if (window.QMatcher !== undefined) {
        return;
    }

    function QMatcher(source, search, wrapper) {
        var results, matches, opts, rx, i, e;

        // Set the default wrapper tag
        wrapper = wrapper === false ? wrapper : typeof wrapper === 'string' ? wrapper : 'strong';
        // Transform the source into an iterable array
        source = !(source instanceof Array) ? [source] : source;
        // Split search input into an array
        opts = search.split('');

        // Iterate over each character and scape it
        for (i = 0; i < opts.length; i++) {
            opts[i] = '(' + opts[i].replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") + ')';
        }

        rx = new RegExp(opts.join('(.*?)'), 'gi');
        results = [];

        function wrapMatch() {
            matches = [];
            for (e = 1; e < arguments.length - 2; e++) {
                // Check if the current argument is a match
                matches[e] = (e % 2 === 1) ? ('<' + wrapper + '>' + arguments[e] + '</' + wrapper + '>') :  arguments[e];
            }
            return matches.join('');
        }

        for (i = 0; i < source.length; i++) {
            // Look for a match
            if (rx.test(source[i])) {
                results.push((wrapper !== false) ? source[i].replace(rx, wrapMatch) : source[i]);
            }
        }
        return results;
    }

    // Expose it globally
    window.QMatcher = QMatcher;

}(window || this));
