$(function(){
	jQuery.fn.RssPorta = function(url) {
		this.each(function() {
			var $elemento = $(this);
			var imagen = '';
			var titulo = '';
			var contenido = '';
			var link = '';
			$.getJSON(url, function(data) {
				$.each(data.items, function(index, el) {
					titulo = '<h3>' + el.title + '</h3>';
					link = '<br><a href="' + el.url + '" class="btn btn-primary"> Ver el Post</a>'
					contenido += "<div class='list-group-item post-active'>" + titulo + link + "</div>";


				});
				$elemento.html(contenido);
			});
		});
	}
});