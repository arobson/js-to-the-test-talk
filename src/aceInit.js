$( function() {
	// $( "code" ).each( function( index, el ) {
	// 	var id = "editor-" + index;
	// 	el.id = id;
	// 	var editor = ace.edit( id );
	// 	editor.setTheme("ace/theme/textmate");
	// 	editor.session.setMode("ace/mode/javascript");
	// 	editor.setFontSize( "22px" );
	// 	editor.resize();
	// } );

	var el = $( "code" )[ 5 ]; //.each( function( index, el ) {
	var id = "editor-" + 1;
	el.id = id;
	var editor = ace.edit( id );
	editor.setTheme( "ace/theme/textmate" );
	editor.session.setMode( "ace/mode/javascript" );
	editor.setFontSize( "22px" );
	editor.renderer.setHScrollBarAlwaysVisible( true );
	editor.setAnimatedScroll( true );
	editor.resize();
} );