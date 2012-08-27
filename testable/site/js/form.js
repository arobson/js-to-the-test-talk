var Form = function() {
	var $title = $( "#title" ),
		$speaker = $( "#speaker" ),
		$add = $( "#add" );
	
	return {
		clear: function() {
			$title.val( "" );
			$speaker.val( "" );
			this.disableAdd();
		},
		getTitle: function() { return $title.val().trim(); },
		setTitle: function( value ) { $title.val( value ); },
		whenTitle: function( event, handler ) {
			$title.on( event, handler );
		},
		getSpeaker: function() { return $speaker.val().trim(); },
		setSpeaker: function( value ) { $speaker.val( value ); },
		whenSpeaker: function( event, handler ) {
			$speaker.on( event, handler );
		},
		disableAdd: function() { $add.attr("disabled","disabled"); },
		enableAdd: function() { $add.removeAttr("disabled"); },
		whenAdd: function( event, handler ) {
			$add.on( event, handler );
		}
	};
};