(function (window) {

    'use strict';

    function QMatcher(source, search, wrapper) {
        var results, matches, rx, i;
        source = source instanceof Array ? source : [source];

        rx = new RegExp(search.split('').map(function (item) {
            return '(' + item.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/, "\\$&") + ')';
        }).join('(.*?)'), 'gi');

        results = source.filter(function (item) {
            return rx.test(item);
        });

        return wrapper !== undefined ? results.map(function (item) {
            return item.replace(rx, function () {
                matches = [];
                for (i = 1; i < arguments.length - 2; i++) {
                    matches[i] = (i % 2 === 1) ? wrapper.replace(/\%s/, arguments[i]) : arguments[i];
                }
                return matches.join('');
            });
        }) : results;
    }

    window.QMatcher = QMatcher;

}(window));
