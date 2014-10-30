// $(function(){
// 	jQuery.fn.RssPorta = function() {
// 		this.each(function() {
// 			var $elemento = $(this);
// 			var imagen = '';
// 			var titulo = '';
// 			var contenido = '';
// 			var link = '';
// 			var texto = '';
// 			var url = 'http://ubuntu-conf.blogspot.com/feeds/posts/default?alt=json-in-script';
// 			$.getJSON(url, function(data) {
// 				// $.each(data function(index, el) {
// 				// 	console.log(el);
// 				// });
// 				console.log(data);
// 				// $elemento.html(contenido);
// 			});
// 		});
// 	}
// });
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