angular.module('menlyApp').
	factory('Mathematics', function () {
		
		var factory = {};
		factory.multiply = function(a,b) {
			return a * b;
		}
	
		return factory;
	});