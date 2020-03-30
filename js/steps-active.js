(function ($) {
 "use strict";

		
	$("#example-basic").steps({
		headerTag: "h3",
		bodyTag: "section",
		transitionEffect: "slideLeft",
		autoFocus: true,
		onStepChanged : function (e, cur, prev) {
			populateOrderSum();
			console.log("got event")
		}
	});

})(jQuery); 