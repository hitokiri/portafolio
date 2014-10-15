// $(function(){
// 	jQuery.fn.RssPorta = function() {
// 		this.each(function() {
// 			var $elemento = $(this);
// 			var imagen = '';
// 			var titulo = '';
// 			var contenido = '';
// 			var link = '';
// 			var texto = '';
// 			var url = 'https://www.googleapis.com/blogger/v3/blogs/7610380627270839038/posts?userIp=190.99.25.97&key=AIzaSyCZsHhv72zpjDni3ZT1Sw6uGIGEQCmgqCw';
// 			$.getJSON(url, function(data) {
// 				$.each(data.items, function(index, el) {
// 					titulo = '<h3>' + el.title + '</h3>';
// 					link = '<br><a href="' + el.url + '" class="btn btn-primary" target="_blank"> Ver el Post</a>';
// 					texto = '<div class="texto-post">' + el.content + '</div>';
// 					contenido += "<div class='list-group-item post-active'>" + titulo + texto + link + "</div>";
// 				});

// 				$elemento.html(contenido);
// 			});
// 		});
// 	}
// 	jQuery.fn.Github = function(){
// 		this.each(function() {
// 			var $contenido = $(this);
// 			var titulo = '';
// 			var link = '';
// 			var descripcion = '';
// 			var url = 'https://api.github.com/users/hitokiri/repos'
// 			$.getJSON(url, function(data) {
// 				$.each(data, function(index, val) {
// 					console.log(val.name);
// 				});
// 			});
// 		});
// 	}
// });