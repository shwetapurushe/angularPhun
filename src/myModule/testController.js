/**
 * Created by Shweta on 7/10/2015.
 */
(function(){
    angular.module('phun_app.myModule', []);
    angular.module('phun_app.myModule').controller('testController', testController);

    testController.$inject = ['testService'];
    function testController(testService){
        var tCtrl = this;

        tCtrl.testMessage = "Hola!";
        tCtrl.testService = testService

        tCtrl.printProp = function(){

            var greeting = "Hey!";
            console.log(greeting + tCtrl.testService.testProp);
        };
    };
})();