var List = function( selector ) {
	var $list = $( "#list" );
	
	return {
		add: function( title, speaker ) {
			var $dt = $( "<dt>" + title + "</dt>" );
			var $dd = $( "<dd>" + speaker + "</dd>" );
			$list.append( $dt );
			$list.append( $dd );
		},
		getTitles: function() {
			return $list
					.find( "dt" )
					.map( function() { return $(this).text(); } )
					.get();
		}
	};
};