/**
 * Created by Shweta on 7/10/2015.
 */
(function(){
    angular.module('phun_app.myModule').service('testService',testService );

    function testService (){
        var that = this;

        that.counter = 0;
        that.testProp = "Hello Shweta";

        that.incrementCounter = function(){
          that.counter++;
        };
    }
})();