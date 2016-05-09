(
	function(){

		var registerService=function($http,$q,commonSrv){

			this.getCountries=function(){
				var dfd = $q.defer();

				commonSrv.getCountriesApi().then(
						function(countries){
							dfd.resolve(countries);
						}
					).catch(
						function(err) {
							console.log("Error while fetching the country list ::"+ err);
							dfd.resolve(err);
						}
					);
				return dfd.promise;
			}

			this.getStateList=function(id){
				var dfd =$q.defer();

				commonSrv.getStatesApi().then(
						function(states){
							dfd.resolve(states[id]);
						}
					).catch(
						function(err) {
							console.log("Error while fetching the country list ::"+ err);
							dfd.resolve(err);
						}
					);
				return dfd.promise;
			}

			this.saveUser = function(user){				
				console.log("post method");
					
			}
		}

		angular.module('eSales.register').service('registerSrv', ['$http','$q','commonSrv',registerService]);
	}
)();
