$( function() {
	$( "#form #add" ).on( "click", function() {
		var $title = $( "#form #title" ),
			$speaker = $( "#form #speaker" ),
			title = $title.val().trim(),
			speaker = $speaker.val().trim(),
			$form = $( "#form" ),
			$add = $form.find( "#add" ),
			$list = $( "#list" ),
			$dt = $( "<dt>" + title + "</dt>" ),
			$dd = $( "<dd>" + speaker + "</dd>" );
				
		if( !$add.attr( "disabled" ) ) {
			$list.append( $dt );
			$list.append( $dd );
			$title.val("");
			$speaker.val("");
			$add.attr( "disabled", "disabled" );
		}
	} );

	$( "#form" ).on( "keyup", function() {
		var $form = $( "#form" ),
			$list = $( "#list" ),
			$add = $form.find( "#add" ),
			newTitle = $form.find( "#title" ).val().trim(),
			newSpeaker = $form.find( "#speaker" ).val().trim(),
			blankTitle = newTitle === "" || !newTitle,
			blankSpeaker = newSpeaker === "" || !newSpeaker,
			titles = $list.find( "dt" )
						.map( function() { return $(this).text(); } )
						.get();
			duplicate = _.any( titles, function( title ) {
				return title === newTitle;
			} );
		if( duplicate || blankTitle || blankSpeaker) {
			$add.attr( "disabled", "disabled" );
		} else {
			$add.removeAttr( "disabled" );
		}
	} );
} );