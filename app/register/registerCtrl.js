(
	function(){
		'use strict';

		function registerController($scope,registerSrv){
			console.log("Enter into registerController");
			$scope.registerUser = {
				"firstName":"",
				"lastName":"",
				"phoneNumber":"",
				"email":"",
				"age":"",
				"gender":"",
				"selectedCountry":"",
				"selectedState":""
			};
			$scope.states=[];

			registerSrv.getCountries()
						.then(
							function(response){
								$scope.countries = response;
								console.log("Retrived Country API response");
							}
						).catch(
							function(error){
								$scope.countries = "";
							}
						);

			$scope.getStates = function(){
				var ctry = $scope.registerUser.selectedCountry;

				if(ctry != undefined && ctry != null && ctry != '') {
					registerSrv.getStateList(ctry.id)
							.then(
								function(response){
									console.log("Retrived State API response for country ::"+ctry.id);
									$scope.states=response;
								}
							).catch(
								function(error){
									$scope.states = "";
								}
							);
				}

			}

			$scope.register=function(){
				registerSrv.saveUser($scope.registerUser);
			}
			console.log("Exit of Register controller");
		}



		angular.module('eSales.register').controller('registerCtrl', ['$scope','registerSrv',registerController]);
	}
	)();
