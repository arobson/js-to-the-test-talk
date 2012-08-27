var Talk = function( list, form ) {
	var addItem = function() {
		list.add( form.getTitle(), form.getSpeaker() );
		form.clear();
	};

	var validateForm = function() {
		var newTitle = form.getTitle(),
			newSpeaker = form.getSpeaker(),
			blankTitle = newTitle === "" || !newTitle,
			blankSpeaker = newSpeaker === "" || !newSpeaker,
			duplicate = _.any( list.getTitles(), function( title ) {
				return title === newTitle;
			} );
		if( duplicate || blankTitle || blankSpeaker) {
			form.disableAdd();
		} else {
			form.enableAdd();
		}
	};

	form.whenAdd( "click", addItem );
	form.whenTitle( "keyup", validateForm );
	form.whenSpeaker( "keyup", validateForm );
};