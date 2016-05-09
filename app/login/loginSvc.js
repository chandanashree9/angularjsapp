(
	function(){

		var loginService = function($http,$q,authFactory){
			this.authenticateUser = function(obj){
				var result = authFactory.validateAuthUser(obj);
				return result;
			}

			this.getUserInfo = function(name){
				var dfd = $q.defer();
				
				$http.get('resource/user.json')
					.then(
						function(response) {
							var user = "";
							angular.forEach(response.data, function(obj, indx){
								if(obj.username === name){
									user = obj;
								}
							});
							dfd.resolve(user);
						}
					)
					.catch(
						function(error) {
							dfd.reject(error);
						}
					);
				return dfd.promise;
			}

		}

		angular.module('eSales.login').service('loginSrv', ['$http','$q','authFactory', loginService]);
	}
)();