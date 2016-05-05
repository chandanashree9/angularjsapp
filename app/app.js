( 
	function(){
	'use strict';

	var salesApp = angular.module("eSales",[
		'eSales.login',
		'eSales.home',
		'eSales.contactus',
		'eSales.aboutus',
		'eSales.gadgets',
		'eSales.appreals',
		'eSales.common'
	]);

	salesApp.config(function(){
			console.log("i am the main module");
		});
})();

