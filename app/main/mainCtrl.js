(
	function(){
	'use strict';

	function mainController($scope,$rootScope,authFactory){
		function init(){
			$scope.logo = "img/image1.jpg";
			$scope.navigationTemplate = "html/navbar.tpl.html";
			$scope.tabs=[
				{ display:"Home", name:"home", template:"html/home.tpl.html"},
				{ display:"Gadgets", name:"gadgets", template:"html/gadgets.tpl.html"},
				{ display:"Accessories", name:"accessories", template:"html/accessories.tpl.html"},
				{ display:"Appreals", name:"appreals", template:"html/appreals.tpl.html"},
				{ display:"AboutUs", name:"aboutus", template:"html/aboutus.tpl.html"},
				{ display:"ContactUs", name:"conatctus", template:"html/contactus.tpl.html"},
			];
		}

		$scope.loadView = function(item){
			$scope.contentTemplate=item.template;
		};

		$scope.loadlogin = function(){
			$scope.contentTemplate = "html/login.tpl.html";
		}

		$scope.loadRegister = function(){
			$scope.contentTemplate = "html/register.tpl.html";
		}

		$rootScope.$on('LOGIN_SUCCESS',function(event,args){
			console.log("args ::"+args.username+"::"+ args.email);
			var user = authFactory.getUserDetails();
			console.log("factory get userinfo ::"+user.username+"::"+ user.email);
		});

		init();
	}

	angular.module("eSales").controller("mainCtrl",["$scope","$rootScope","authFactory",mainController]);

})();