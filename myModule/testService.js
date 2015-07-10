/**
 * Created by Shweta on 7/10/2015.
 */
(function(){
    angular.module('phun_app.myModule').service('testService',testService );

    function testService (){
        this.testProp = "Hello Shweta";
    }
})();