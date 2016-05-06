(
	function(){

		function accessoriesController($scope,accessoriesSrv){

			$scope.displayContent = function(item){
				item.btnmore.flag = !item.btnmore.flag;
				item.btnmore.name = (item.btnmore.flag) ? "less" : "more";
			}
			
			accessoriesSrv.accessoriesApi()
				.then(
					function(response){
						var list = response.data;
						$scope.accessories=accessoriesSrv.modifyAccessoriesList(list);
					}
				).catch(
					function(error){
						console.log("Api error: "+error);
					}
				);
		}
		

		angular.module('eSales.accessories').controller("accessoriesCtrl", ["$scope","accessoriesSrv",accessoriesController]);
	}
)();