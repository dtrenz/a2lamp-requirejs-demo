require.config({
	paths: {
		jquery: 'lib/jquery-1.9.1',
		jqueryui: 'lib/jquery-ui-1.10.3.min'
	},
	shim: {
		jqueryui: {
			deps: [ 'jquery' ],
			exports: '$'
		}
	}
});

require([ 'jquery', 'lib/config', 'jqueryui' ], function( $, config ) {

	$(function() {

	    $('body').css({
	        'background-color': config.bgColor,
	        'color': config.textColor
	    });

	    $('#accordion').accordion();

	});

});