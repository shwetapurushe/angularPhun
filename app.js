(function(){
	"use strict";
	angular.module('myApp', ['myApp.module1']);

	angular.module('myApp').controller('mainController', mainController);

	function mainController ()
	{
		var mainCtrl = this;

		mainCtrl.greeting = "Hello World!"
	}

})();