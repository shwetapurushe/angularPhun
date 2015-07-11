/**
 * Created by Shweta on 7/10/2015.
 */
angular.module('phun_app.myModule',[])
    .controller('PasswordController', passwordController);

function passwordController ($scope){
        $scope.password = '';
        $scope.grade = function() {
            var size = $scope.password.length;
            if (size > 8) {
                $scope.strength = 'strong';
            } else if (size > 3) {
                $scope.strength = 'medium';
            } else {
                $scope.strength = 'weak';
            }
        };
}
