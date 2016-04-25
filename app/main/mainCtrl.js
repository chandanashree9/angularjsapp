(
	function(){
	'use strict';

	function mainController($scope){
		function init(){
			$scope.logo = "img/image1.jpg";
			$scope.navigationTemplate = "app/main/navbar_tpl.html";
			$scope.tabs=[
				{ display:"Home", name:"home", template:"app/home/home_tpl.html"},
				{ display:"Gadgets", name:"gadgets", template:"app/gadgets/gadgets_tpl.html"},
				{ display:"Appreals", name:"appreals", template:"app/appreals/appreals_tpl.html"},
				{ display:"AboutUs", name:"aboutus", template:"app/aboutus/aboutus_tpl.html"},
				{ display:"ContactUs", name:"conatctus", template:"app/contactus/contactus_tpl.html"}
			];
		}

		$scope.loadView = function(item){
			$scope.contentTemplate=item.template;
		};

		$scope.loadlogin = function(){
			$scope.contentTemplate = "app/login/login_tpl.html";
		}
		init();
	}

	angular.module("eSales").controller("mainCtrl",["$scope",mainController]);

})();