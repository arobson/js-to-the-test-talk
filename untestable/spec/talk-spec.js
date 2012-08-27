$( function() {
	var noop = function() {};

	var $form = $( "#form" ),
		$list = $( "#list" ),
		$add = $form.find( "#add" ),
		$title = $( "#form #title" ),
		$speaker = $( "#form #speaker" );

	var resetDOM = function() {
		$title.val( "" );
		$speaker.val( "" );
		$add.attr( "disabled", "disabled" );
		$list.html( "<dl></dl>" );
		$form.trigger( "keyup" );
	};

	var isFormClear = function() {
		return $title.val().trim() === "" &&
				$speaker.val().trim() === "";
	};

	var isAddEnabled = function() {
		return !$add.attr( "disabled" );
	};

	var getTitles = function() {
		return $list.find( "dt" )
					.map( function() { return $(this).text(); } )
					.get();
	};

	test( "when adding valid talk", function() {
		resetDOM();
		$title.val( "test" );
		$speaker.val( "test" );
		$form.trigger( "keyup" );
		$add.trigger( "click" );

		ok( isFormClear() );
		equal( getTitles().length, 1 );
		ok( !isAddEnabled() );
		equal( $title.val().trim(), "" );
		equal( $speaker.val().trim(), "" );
	} );

	test( "when adding invalid talk", function() {
		resetDOM();
		$list.append( $( "<dt>test</dt>") );
		$list.append( $( "<dd>test</dd>") );
		$title.val( "test" );
		$speaker.val( "test" );
		$form.trigger( "keyup" );
		$add.trigger( "click" );

		ok( !isFormClear() );
		equal( getTitles().length, 1 );
		ok( !isAddEnabled() );
		equal( $title.val().trim(), "test" );
		equal( $speaker.val().trim(), "test" );
	} );

	test( "when title is invalid", function() {
		resetDOM();
		$speaker.val( "test" );
		$form.trigger( "keyup" );
		$add.trigger( "click" );

		ok( !isFormClear() );
		equal( getTitles().length, 0 );
		ok( !form.addEnabled );
		equal( $title.val().trim(), "" );
		equal( $speaker.val().trim(), "test" );
	} );

	test( "when subject is invalid", function() {
		resetDOM();
		$title.val( "test" );
		$form.trigger( "keyup" );
		$add.trigger( "click" );

		ok( !isFormClear() );
		equal( getTitles().length, 0 );
		ok( !form.addEnabled );
		equal( $title.val().trim(), "test" );
		equal( $speaker.val().trim(), "" );
	} );
} );