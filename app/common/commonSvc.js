(
	function(){
		'use strict';

		var commonService=function($http,$q){	
			var countries="";		
			var states="";

			this.getCountriesApi = function(){
				var dfd = $q.defer();

				if(countries){
					dfd.resolve(countries);
				} else {
					$http.get('resource/country.json')
						.then(
							function(response) {
								countries = response.data;
								dfd.resolve(countries);
							}
						)
						.catch(
							function(error) {
								dfd.reject(error);
							}
						);
				}
				return dfd.promise;
			}

			this.getStatesApi = function(){
				var dfd = $q.defer();

				if(states){
					dfd.resolve(states);
				} else {
					$http.get('resource/state.json')
						.then(
							function(response) {
								states = response.data;
								dfd.resolve(states);
							}
						)
						.catch(
							function(error) {
								dfd.reject(error);
							}
						);
				}
				return dfd.promise;
			}

		}
		angular.module('eSales.common').service('commonSrv', ['$http','$q',commonService]);
	}
)();