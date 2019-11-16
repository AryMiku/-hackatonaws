(function () {
	'use strict';
	
	var app = angular.module('application', []);
	app.controller('storeController', function ($scope) {
		$scope.sushis = "dfdfd"

		$scope.take_snapshot = function(){
			Webcam.snap( function(data_uri) {
				document.getElementById('my_result').innerHTML = '<img src="'+data_uri+'"/>';
			} );
		}
	});
})();