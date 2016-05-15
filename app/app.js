( 
	function(){
	'use strict';

	var salesApp = angular.module("eSales",[
		'eSales.common',
		'eSales.login',
		'eSales.home',
		'eSales.contactus',
		'eSales.aboutus',
		'eSales.gadgets',
		'eSales.accessories',
		'eSales.appreals',
		'eSales.register',
		'ui.router'
	]);


	function configuration($stateProvider,$urlRouterProvider){
		var homeObj = {
			name:"home",
			url:"/home",
			controller:"homeCtrl",
			params:{user:""},
			templateUrl:"html/home.tpl.html"
		};

		var gadgetsObj = {
			name:"gadgets",
			url:"/gadgets",
			controller:"gadgetsCtrl",
			params:{user:""},
			templateUrl:"html/gadgets.tpl.html"
		};

		var accessoriesObj = {
			name:"accessories",
			url:"/accessories",
			controller:"accessoriesCtrl",
			params:{user:""},
			templateUrl:"html/accessories.tpl.html"
		};

		var apprealsObj = {
			name:"appreals",
			url:"/appreals",
			controller:"apprealsCtrl",
			params:{user:""},
			templateUrl:"html/appreals.tpl.html"
		};

		var contactusObj = {
			name:"contactus",
			url:"/contactus",
			controller:"contactUsCtrl",
			templateUrl:"html/contactus.tpl.html"
		};

		var aboutusObj = {
			name:"aboutus",
			url:"/aboutus",
			controller:"aboutUsCtrl",
			templateUrl:"html/aboutus.tpl.html"
		};

		var registerObj = {
			name:"register",
			url:"/register",
			controller:"registerCtrl",
			templateUrl:"html/register.tpl.html"
		};

		var loginObj = {
			name:"login",
			url:"/login",
			controller:"loginCtrl",
			templateUrl:"html/login.tpl.html"
		};

		$stateProvider.state("home",homeObj);
		$stateProvider.state("gadgets",gadgetsObj);
		$stateProvider.state("accessories",accessoriesObj);
		$stateProvider.state("appreals",apprealsObj);
		$stateProvider.state("contactus",contactusObj);
		$stateProvider.state("aboutus",aboutusObj);
		$stateProvider.state("register",registerObj);
		$stateProvider.state("login",loginObj);

		$urlRouterProvider.otherwise("/login");
	}

	salesApp.config(['$stateProvider','$urlRouterProvider', configuration]);

})();

