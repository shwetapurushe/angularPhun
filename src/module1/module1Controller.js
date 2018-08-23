(function(){
	"use strict";

	angular.module('myApp.module1').controller('module1Controller', module1Controller);

	function module1Controller()
	{
		var mdC = this;

		mdC.update = "This is module 1 Controller";
	}
})();