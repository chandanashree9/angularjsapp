(
	function(){
	'use strict';

	function mainController($scope,$rootScope,$state,authFactory){
		function init(){
			$scope.logo = "img/image1.jpg";
			$scope.navigationTemplate = "html/navbar.tpl.html";
			$scope.userdetails={
				userid:"",
				username:"",
				isAuthenticated:false
			};
			/*
			// ng-include
			$scope.tabs=[
				{ display:"Home", name:"home", template:"html/home.tpl.html"},
				{ display:"Gadgets", name:"gadgets", template:"html/gadgets.tpl.html"},
				{ display:"Accessories", name:"accessories", template:"html/accessories.tpl.html"},
				{ display:"Appreals", name:"appreals", template:"html/appreals.tpl.html"},
				{ display:"AboutUs", name:"aboutus", template:"html/aboutus.tpl.html"},
				{ display:"ContactUs", name:"contactus", template:"html/contactus.tpl.html"},
			];*/

			// ui-router
			$scope.tabs=[
				{ display:"Home", name:"home"},
				{ display:"Gadgets", name:"gadgets"},
				{ display:"Accessories", name:"accessories"},
				{ display:"Appreals", name:"appreals"},
				{ display:"AboutUs", name:"aboutus"},
				{ display:"ContactUs", name:"contactus"},
			];
		}

		/*
		// ng-include
		$scope.loadView = function(item){
			$scope.contentTemplate=item.template;
		};

		$scope.loadlogin = function(){
			$scope.contentTemplate = "html/login.tpl.html";
		}

		$scope.loadRegister = function(){
			$scope.contentTemplate = "html/register.tpl.html";
		}*/

		$scope.logout = function(){
			$scope.userdetails=authFactory.logoffUser();
			$state.go("login");
		}

		$rootScope.$on('LOGIN_SUCCESS',function(event,args){
			console.log("args ::"+args.data.username);
			var user = authFactory.getUserDetails();
			console.log("factory get userinfo ::"+user.username+"::"+ user.email);
			$scope.userdetails = user;
		});

		init();
	}

	angular.module("eSales").controller("mainCtrl",["$scope","$rootScope","$state","authFactory",mainController]);

})();