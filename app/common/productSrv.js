(
	function(){
		
		var productService=function(){
			this.getDiscounts=function(obj){
				var discount={
					percentage:0,
					decimal:1
				}
				if(obj.price >= 100 && obj.price <= 400) {
					discount.percentage=5;
					discount.decimal=.25;
					return discount;
				} else if(obj.price > 400) {
					discount.percentage=8;
					discount.decimal=.4;
					return discount;
				} else {
					return discount;
				}

			}
		}  

		angular.module('eSales.common').service('productSrv', [productService]);
	}
)();