(
	function (){
	'use strict';

	function loginController($scope)
	{
		function init(){
			$scope.login={
				username : "",
				password:"",
				rememberme:false
			};
		}
		$scope.loginUser=function(){
			console.log($scope.login);
		};

		init();
	};

	angular.module('eSales.login')
		.controller("loginCtrl",['$scope',loginController]);
})();