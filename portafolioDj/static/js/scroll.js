$(function(){
	jQuery.fn.scrollTo = function(options){
		var settings = jQuery.extend({
			padding: 0
		}, options);

		this.each(function(){
			var $seccion = $(this);
			var x = $seccion.offset().left;
			$("html, body").animate({
				scrollLeft: x
			}, 800);
		});
	}
})