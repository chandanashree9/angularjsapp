(
	function(){

		function homeController($scope,$state,$stateParams){
			var data = "Welcome ";
			if($stateParams.user){
				data = data + $stateParams.user.username;
			}
			console.log($state);

			$scope.title = data;
		}

		angular.module('eSales.home').controller('homeCtrl',['$scope','$state','$stateParams',homeController]);
	}
)();
