(function ( window ) {

    'use strict';

    function QMatcher( source, search, wrapper ) {
        var results, opts, rx, i, e;

        // Transform the source into an iterable array
        if ( ! ( source instanceof Array ) ) {
            source = [ source ];
        }

        opts = search.split( '' );
        // Iterate over each character and scape it
        for ( i = 0; i < opts.length; i++ ) {
            opts[ i ] = '(' + opts[ i ].replace( /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/, "\\$&" ) + ')';
        }

        rx = new RegExp( opts.join( '(.*?)' ), 'gi' );
        results = [];

        function wrapMatch() {
            var matches = [];
            for ( e = 1; e < arguments.length - 2; e++ ) {
                // Check if the current argument is a match
                matches.push( ( e % 2 === 1 ) ? wrapper.replace( /\%s/, arguments[ e ] ) : arguments[ e ] );
            }
            return matches.join( '' );
        }

        // This duplicated code is for performance only
        if ( wrapper !== undefined ) {
            for ( i = 0; i < source.length; i++ ) {
                if ( rx.test( source[ i ] ) ) {
                    results.push( source[ i ].replace( rx, wrapMatch ) );
                }
            }
        } else {
            for ( i = 0; i < source.length; i++ ) {
                if ( rx.test( source[ i ] ) ) {
                    results.push( source[ i ] );
                }
            }
        }

        return results;
    }

    // Expose it globally
    window.QMatcher = QMatcher;
})( window );
