(
	function(){
	'use strict';

	function mainController($scope){
		function init(){
			$scope.logo = "img/image1.jpg";
			$scope.navigationTemplate = "app/html/navbar_tpl.html";
			$scope.tabs=[
				{ display:"Home", name:"home", template:"app/html/home_tpl.html"},
				{ display:"Gadgets", name:"gadgets", template:"app/html/gadgets_tpl.html"},
				{ display:"Appreals", name:"appreals", template:"app/html/appreals_tpl.html"},
				{ display:"AboutUs", name:"aboutus", template:"app/html/aboutus_tpl.html"},
				{ display:"ContactUs", name:"conatctus", template:"app/html/contactus_tpl.html"}
			];
		}

		$scope.loadView = function(item){
			$scope.contentTemplate=item.template;
		};

		$scope.loadlogin = function(){
			$scope.contentTemplate = "app/html/login_tpl.html";
		}
		init();
	}

	angular.module("eSales").controller("mainCtrl",["$scope",mainController]);

})();