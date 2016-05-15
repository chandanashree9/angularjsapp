(
	function (){
	'use strict';

	function loginController($scope,$rootScope,$state,loginSrv,authFactory)
	{
		function init(){
			$scope.login={
				name : "",
				password:"",
				rememberme:false
			};
		}
		$scope.loginUser=function(){
			var authFlag=loginSrv.authenticateUser($scope.login);

			if(authFlag){
				loginSrv.getUserInfo($scope.login.name)
					.then(
						function(userData){
							console.log("user data ::" +userData.username+"::"+ userData.email);
							if(userData){
								userData.isAuthenticated=true;
								authFactory.setUserDetails(userData);
								$rootScope.$broadcast('LOGIN_SUCCESS', {data:userData});
							}
						}
					).catch(
						function(err){
							console.log("user data response error ::" +err);
						}
					);
			} else{
				console.log("login invalid ::"+$scope.login);
			}
		};

		init();
	};

	angular.module('eSales.login')
		.controller("loginCtrl",['$scope','$rootScope','$state','loginSrv','authFactory',loginController]);
})();