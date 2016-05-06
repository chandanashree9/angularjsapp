(
	function(){
		'use strict';

		var accessoriesService = function ($http,$q){
			
			this.accessoriesApi = function(){
				var dfd = $q.defer();
				var accessories = "";

				$http.get("resource/accessories.json")
					.then(
						function(response){
							accessories = response; 
							dfd.resolve(response);
						})
					.catch(
						function(error){
							dfd.reject(error);
						});

				return dfd.promise;
			};

			this.modifyAccessoriesList = function(data){
				angular.forEach(data, function(obj, indx){
					console.log("-------------- Json object :"+obj.name+":: index::"+indx+"----------");
					obj.btnmore = {	"flag":false,
									"name":"more" };
				});

				return data;
			}
		}

		angular.module('eSales.accessories').service("accessoriesSrv",["$http","$q",accessoriesService]);
})();