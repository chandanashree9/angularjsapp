(
	function(){
		'use strict';

		var gadgetService = function ($http,$q,productSrv){
			
			this.gadgetApi = function(){
				var dfd = $q.defer();
				var gadgets = "";

				$http.get("http://127.0.0.1:8082/eSales/rest/product/list")
					.then(
						function(response){
							gadgets = response; 
							dfd.resolve(response);
						})
					.catch(
						function(error){
							dfd.reject(error);
						});

				return dfd.promise;
			};

			this.modifyGadgetList = function(data){
				angular.forEach(data, function(obj, indx){
					console.log("-------------- Json object :"+obj.name+":: index::"+indx+"----------");
					obj.discount = productSrv.getDiscounts(obj);
					obj.btnmore = {	"flag":false,
									"name":"more" };
				});

				return data;
			}
		}

		angular.module('eSales.gadgets').service("gadgetSrv",["$http","$q","productSrv",gadgetService]);

})();