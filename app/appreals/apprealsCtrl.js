(
	function(){
		function apprealsController($scope,apprealsSrv){
			$scope.displayContent = function(item){
				item.btnmore.flag != item.btnmore.flag;
				item.btnmore.name = (item.btnmore.name) ? "less" : "more";
			}

			apprealsSrv.apprealsApi()
				.then(
					function(response){
						var list = response.data;
						$scope.appreals = apprealsSrv.modifyApprealsList(list);
					}
				).catch(
					function(error){
						console.log("Api error :"+error);
					}
				);
		}
	
	angular.module('eSales.appreals').controller('apprealsCtrl', ['$scope','apprealsSrv',apprealsController]);
	}
)();