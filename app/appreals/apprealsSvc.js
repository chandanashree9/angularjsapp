(
	function(){
		'use strict';

		var apprealsService = function($http,$q){

			this.apprealsApi = function(){
				var dfd = $q.defer();
				var appreals= "";

				$http.get("resource/appreals.json")
				.then(
					function(response){
						appreals = response;
						dfd.resolve(response);
					})
				.catch(
					function(error){
						dfd.reject(error);
					});
					return dfd.promise;
			};

			this.modifyApprealsList = function(data){
				angular.forEach(data, function(obj, indx){
					obj.btnmore={"flag":false,
						"name":"more"};
					});
				return data;
			}
		}

		angular.module('eSales.appreals').service("apprealsSrv",['$http','$q',apprealsService]);
	})();
