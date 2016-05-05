(
	function(){
	'use strict';

	function gadgetsController($scope, gadgetSrv){
				
		$scope.displayContent = function(item){
			item.btnmore.flag = !item.btnmore.flag;
			item.btnmore.name = (item.btnmore.flag) ? "less" : "more";
		}
		
		gadgetSrv.gadgetApi()
			.then(
				function(response){
					var list = response.data;
					$scope.gadgets=gadgetSrv.modifyGadgetList(list);
				}
			).catch(
				function(error){
					console.log("Api error: "+error);
				}
			);

	}

	angular.module('eSales.gadgets').controller("gadgetsCtrl",["$scope","gadgetSrv",gadgetsController]);

})();