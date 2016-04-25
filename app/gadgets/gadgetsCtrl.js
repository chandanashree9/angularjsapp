(
	function(){
	'use strict';

	function gadgetsController($scope){
		function init(){
			$scope.gadgets=[
				{ 
					name:"Galaxy S7", 
					specification:"Hybrid Dual SIM, microSD up to 200GB", 
					price:500, 
					imgurl:"../../img/image2.jpg", 
					description:"Motion Panorama, Selfie Flash Water & dust resistant (IP68)",
					more : {
						flag:false,
						name:"more"
					}
				},
				{ 
					name:"Galaxy S6 edge+", 
					specification:"Dual Edge Glass and Metal Finishing", 
					price:400, 
					imgurl:"../../img/image3.jpg", 
					description:"Purposeful Edge Live Broadcast",
					more : {
						flag:false,
						name:"more"
					}
				},
				{ 
					name:"Galaxy S6 edge", 
					specification:"CPU: Quad-core, 1.2 GHz", 
					price:300, 
					imgurl:"../../img/image4.jpg", 
					description:"Display: Super AMOLED, 720 x 1280 (HD) Resolution: 8 MP",
					more : {
						flag:false,
						name:"more"
					}
				}
			];

			$scope.displayContent = function(item){
				item.more.flag = !item.more.flag;
				item.more.name = (item.more.flag) ? "less" : "more";
			}
		}

		init();
	}

	angular.module('eSales.gadgets').controller("gadgetsCtrl",["$scope",gadgetsController]);

})();