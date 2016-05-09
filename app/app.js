( 
	function(){
	'use strict';

	var salesApp = angular.module("eSales",[
		'eSales.common',
		'eSales.login',
		'eSales.home',
		'eSales.contactus',
		'eSales.aboutus',
		'eSales.gadgets',
		'eSales.accessories',
		'eSales.appreals',
		'eSales.register'
	]);

	salesApp.config(function(){
			console.log("i am the main module");
		});
})();

