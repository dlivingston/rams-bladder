var main = function () {
	"use strict";

	$(".tabs a span").toArray().forEach(function (element) {
		// create a click handle for this element
		$(element).on("click", function (){
			$(".tabs a span").removeClass("active");
			$(element).addClass("active");
			$("main .cotent").empty();
			return false;
		});
	});


	// var makeTabActive = function (tabNumber){
	// 	//construct the selector from the tabNumber
	// 	var tabSelector = ".tabs a:nth-child(" + tabNumber + ") span";
	// 	$(".tabs span").removeClass("active");
	// 	$(tabSelector).addClass("active");
	// };



};