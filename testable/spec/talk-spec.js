var noop = function() {};

var Form = function() {
	var form = {
		cleared: false,
		addEnabled: false,
		title: "",
		speaker: "",
		addHandler: noop,
		speakerHandler: noop,
		titleHandler: noop,

		clear: function() {
			this.title = "";
			this.speaker = "";
			this.cleared = true;
			this.addEnabled = false;
		},

		disableAdd: function() { this.addEnabled = false; },
		enableAdd: function() { this.addEnabled = true; },

		getSpeaker: function() { return this.speaker; },
		setSpeaker: function( value ) { this.speaker = value; },

		getTitle: function() { return this.title; },
		setTitle: function( value ) { this.title = value; },

		raiseAdd: function() { 
			if( this.addEnabled ) { 
				this.addHandler();
			}
		},
		raiseTitle: function() { this.titleHandler(); },
		raiseSubject: function() { this.subjectHandler(); },

		whenAdd: function( e, handler ) {
			this.addHandler = handler;
		},
		whenSpeaker: function( e, handler ) {
			this.speakerHandler = handler;
		},
		whenTitle: function( e, handler ) {
			this.titleHandler = handler;
		}
	};
	_.bindAll( form );
	return form;
};

var List = function() {
	var list = {
		titles: [],
		add: function( title, speaker ) {
			this.titles.push( title );
		},
		getTitles: function() {
			return this.titles;
		}
	};
	_.bindAll( list );
	return list;
};

test( "when adding valid talk", function() {
	var list = new List();
	var	form = new Form();
	var	talk = new Talk( list, form );

	form.title = "test";
	form.speaker = "test";
	form.raiseTitle();
	form.raiseAdd();

	equal( form.cleared, true );
	ok( list.titles.length > 0 );
	ok( !form.addEnabled );
	equal( form.getTitle(), "" );
	equal( form.getSpeaker(), "" );
} );

test( "when adding invalid talk", function() {
	var list = new List();
	var	form = new Form();
	var	talk = new Talk( list, form );

	list.titles.push( "test" );
	form.title = "test";
	form.speaker = "test";
	form.raiseTitle();
	form.raiseAdd();

	equal( form.cleared, false );
	equal( list.titles.length, 1 );
	ok( !form.addEnabled );
	equal( form.getTitle(), "test" );
	equal( form.getSpeaker(), "test" );
} );

test( "when title is invalid", function() {
	var list = new List();
	var	form = new Form();
	var	talk = new Talk( list, form );

	form.speaker = "test";
	form.raiseTitle();
	form.raiseAdd();

	equal( form.cleared, false );
	equal( list.titles.length, 0 );
	ok( !form.addEnabled );
	equal( form.getTitle(), "" );
	equal( form.getSpeaker(), "test" );
} );

test( "when subject is invalid", function() {
	var list = new List();
	var	form = new Form();
	var	talk = new Talk( list, form );

	form.title = "test";
	form.raiseTitle();
	form.raiseAdd();

	equal( form.cleared, false );
	equal( list.titles.length, 0 );
	ok( !form.addEnabled );
	equal( form.getTitle(), "test" );
	equal( form.getSpeaker(), "" );
} );