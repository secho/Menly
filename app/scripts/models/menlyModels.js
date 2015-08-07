var menlyModels = angular.module('MenlyModels',[]);

menlyModels.factory('Girl', function($q) {

	var Girl = Parse.Object.extend("Girl",{
			// Instance methods
		},{
			// Class methods

			list: function() {
				var defer = $q.defer();
				var query = new Parse.Query(this);
				query.find({
					success: function(aGirls) {
						defer.resolve(aGirls);
					}, 
					error: function (aError) {
						defer.reject(aError);
					}
				});

				return defer.promise;
			}
		});

	Girl.prototype.__defineGetter__("name", function() {
		return this.get("name");
	});

	Girl.prototype.__defineSetter__("name", function(aValue) {
		console.log("in setter");
		return this.set("name", aValue);
	});

	return Girl;
});

menlyModels.factory('Gloss', function($q) {

	var Gloss = Parse.Object.extend("Gloss",{
			// Instance methods
		},{
			// Class methods

			list: function() {
				var defer = $q.defer();
				var query = new Parse.Query(this);
				query.find({
					success: function(aGlosses) {
						defer.resolve(aGlosses);
					}, 
					error: function (aError) {
						defer.reject(aError);
					}
				});

				return defer.promise;
			},
			add: function(aGloss) {
				aGloss.save(null, {
					success: function(aGloss) {
						console.log("gloss has been saved");
					}, error: function(aGloss, error) {

					}

				});
			}
		});

	Gloss.prototype.__defineGetter__("text", function() {
		return this.get("text");
	});

	Gloss.prototype.__defineSetter__("text", function(aValue) {
		console.log("in setter");
		return this.set("text", aValue);
	});

	return Gloss;
});

