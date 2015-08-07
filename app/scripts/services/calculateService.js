angular.module('menlyApp').
	service('CalculateService', function (Mathematics) {
		console.log("Controller service run");
		this.square = function(a) {
			return Mathematics.multiply(a,a);
		};
	});