'use strict';

/**
 * @ngdoc function
 * @name menlyApp.controller:GlossCtrl
 * @description
 * # GlossCtrl
 * Controller of the menlyApp
 */
 angular.module('menlyApp')
 .controller('GlossCtrl', ['$scope','CalculateService', 'Girl', 'Gloss',function ($scope, CalculateService,Girl, Gloss) {

 	console.log("glosscontroller run");

 	$scope.firstGloss = "Seznam hlášek:";

 	$scope.square = function(a) {
 		return CalculateService.square(a);
 	};


 	Girl.list().then(function (aGirls) {
 		$scope.girls = aGirls;
 	}, function(aError) {
 		// Something went wrong...
 	});

 	Gloss.list().then(function (aGlosses) {
 		$scope.glosses = aGlosses;
 	}, function(aError) {
 		// Something went wrong...
 	});

 	$scope.addGloss = function () {
 		var gloss = new Gloss();
 		gloss.text = "Neboj, už jenom pár dní";
 		Gloss.add(gloss);
 	}




 	// $scope.mygloss = new Gloss();

 	// function() {

 	// 	var Gloss = Parse.Object.extend("Gloss");
 	// 	var query = new Parse.Query(Gloss);

 	// 	query.find({
 	// 		success: function(results) {
 	// 			$scope.glosses = results;
 	// 		},
 	// 		error: function(error) {
 	// 			alert("Error: " + error.code + " " + error.message);
 	// 		}
 	// 	});
 	// };


 }]);




