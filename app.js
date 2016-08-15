(function(){
	"use strict";
	angular.module('myApp', []);

	angular.module('myApp').controller('mainController', mainController);

	function mainController ()
	{
		var mainCtrl = this;

		mainCtrl.greeting = "Hello World!"
	}

})();