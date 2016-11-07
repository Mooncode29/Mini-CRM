(function () {
	"use strict"
	console.log('start');
	var app = {
		init : function () {
			console.log('go!');
			$.ajax('/data/crm.json')
			.done(app.ajaxDone)
			.fail(app.ajaxFail);
		},
		ajaxDone: function(data){
			console.log(data);
			var len = data.customers.length;
			console.log(len);
			// var obj1 = data.customers[0];
			// console.log(obj1);
			for(var i = 0; i < len; i++){
				var obj = data.customers[i];
					for(var prop in obj){
						// console.log(prop + ":" + obj[prop]);
						var objets = prop + ":" + obj[prop];
						// console.log(objets);
						$('#infos').append('<ul><li>' + objets + '</li></ul>' );
						
					}
			}

			// 	// console.log(label);
			// 	// $('#infos').append('<ul><li>'+ label.id + '<ul></li>');

			

		},
















	};
app.init();

})();