// find files changed since last version
wn.versions.check();

// load all critical libraries
wn.require("lib/js/lib/jquery.min.js");
wn.require("lib/js/lib/history/history.min.js");

/* overload links for ajax pages */
$(document).bind('ready', function() {
	var base = window.location.href.split('#')[0];
	
	// convert hard links to softlinks
	$.each($('a[softlink!="false"]'), function(i, v) {
		
		// if linking on the same site
		if(v.href.substr(0, base.length)==base) {
			var path = (v.href.substr(base.length));
			
			// if hardlink, softlink it
			if(path.substr(0,1)!='#') {				
				v.href = base + '#' + path;
			}
		}
	});

	// go to hash page if exists
	if(!wn.settings.no_history && window.location.hash) {
		wn.page.set(window.location.hash.substr(1));
	}

});
