(
	function(){
		'use strict';

		var authenticateFact = function(){
			var userDetails = {};
			var validateUser = function(obj){
				if(obj.name === "chandana" && obj.password === "shree123"){
					return true;
				} else if(obj.name === "admin" && obj.password === "admin123"){
					return true;
				} else {
					return false;
				}
			};

			var resetDetails = function(){
				userDetails.userid="";
				userDetails.username="";
				userDetails.isAuthenticated = "";
				return userDetails;
			}

			var setUserDetails = function(user){
				userDetails = user;
			};
			var getUserDetails = function(){
				return userDetails;
			}

			return {
				validateAuthUser:validateUser,
				setUserDetails:setUserDetails,
				getUserDetails: getUserDetails,
				logoffUser: resetDetails
			};
		}


		angular.module('eSales.common').factory('authFactory', [authenticateFact]);
	}
)();