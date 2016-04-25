( 
	function(){
	'use strict';

	var salesApp = angular.module("eSales",[
		'eSales.login',
		'eSales.home',
		'eSales.contactus',
		'eSales.aboutus',
		'eSales.gadgets',
		'eSales.appreals'
	]);

	salesApp.config(function(){
			console.log("i am the main module");
		});
})();

