
function followTheLeader(target, resize) {
	target.each(function(){
		// Find out who you are.
		var ego				= jQuery(this);
		var previousVal;
		var newVal;
		if(ego.prop("tagName") == 'SELECT'){
			// Remember if you've decided to be different.
			previousVal	= ego.val();
		}else{
			// Remember if you've decided to be different.
			previousVal	= ego.find(".select2-chosen").html();
		}


		// Check to see if you should change.
		if (!ego.hasClass("take-suggestion")){
			if (ego.prop("tagName") == 'INPUT') {
				ego.keyup(function(){
					// Is my value different than before?
					newVal = ego.val();
					if (ego.val() != previousVal){
						// Tell everyone that I've set a new trend.
						target.each(function(){
							shouldChange(jQuery(this), newVal, previousVal);
							ifEmpty(jQuery(this));
						});
					}
		 			// Remind myself what my values are in case they've changed.
					previousVal	= ego.val();
				});
			}else if (ego.prop("tagName") == 'SELECT'){
				ego.on("change", function(){
					newVal = ego.val();
					target.each(function(){
						shouldChange(jQuery(this), newVal, previousVal);
						ifEmpty(jQuery(this));
					});
				});
			};
		}
	});
}




function resizeInput(targets){
	targets.each(function(){
		jQuery(this).on("keyup",function(){
			var size = jQuery(this).val().length - 2;
			if (size && size > 1){	
				targets.attr("size", size);
			}else{
				targets.attr("size", 1);
			}
		});
	});

}

function shouldChange(scope, newVal, oldVal){
	if (scope.hasClass("lead")){
	}
	else if (scope.hasClass("take-suggestion")){
		if(scope.prop("tagName") == 'SELECT'){
			if(scope.val() == oldVal || scope.val() == ""){
				scope.val(newVal);
			}
		}else if(scope.prop("tagName") == 'DIV'){
			if(scope.find(".select2-chosen").html() == oldVal || scope.find(".select2-chosen").html() == ""){
				scope.find(".select2-chosen").html(newVal);
			}
		}else{
			if(scope.val() == oldVal || scope.val() == ""){
				scope.val(newVal);
			}
		}
	}else{
		if(scope.prop("tagName") == 'SELECT' || scope.prop("tagName") == 'INPUT'){
			scope.val(newVal);
		}else if(scope.prop("tagName") == 'DIV'){
			scope.find(".select2-chosen").html(newVal);
		}
	}
}

function ifEmpty(target){
	if(target.val() == target.attr("placeholder") || target.val() == null || target.val() == "Select a Location..." || target.val() == ""){
		target.addClass("print-empty");
	}else{
		target.removeClass("print-empty");
	}
}

function supports(type){
	var i = document.createElement("input");
	i.setAttribute("type", type);
	return i.type !== "text";
}