/**
 * Created by Shweta on 7/10/2015.
 */
angular.module('myServiceMock', []);

angular.module('myServiceMock').provider('testService',function(){
    this.$get = function(){

        return {
            counter : 0,
            testProp : "Hello Shweta",
            incrementCounter : function(){
                counter++;
            }
        }
    };
} );