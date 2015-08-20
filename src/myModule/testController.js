/**
 * Created by Shweta on 7/10/2015.
 */
(function(){
    angular.module('phun_app.myModule', []);
    angular.module('phun_app.myModule').controller('testController', testController);

    testController.$inject = ['testService', '$http'];
    function testController(testService, $http){
        var tCtrl = this;

        tCtrl.testMessage = "Hola!";
        tCtrl.testService = testService;

        tCtrl.gridOptions = {
            enableSorting: true,
            enableFiltering: true,
            showTreeExpandNoChildren: true,
            columnDefs: [
                { name: 'name', width: '30%' },
                { name: 'gender', width: '20%' },
                { name: 'age', width: '20%' },
                { name: 'company', width: '25%' },
                { name: 'state', width: '35%' },
                { name: 'balance', width: '25%', cellFilter: 'currency' }
            ],
            onRegisterApi: function( gridApi ) {
                $scope.gridApi = gridApi;
                $scope.gridApi.treeBase.on.rowExpanded($scope, function(row) {
                    if( row.entity.$$hashKey === $scope.gridOptions.data[50].$$hashKey && !$scope.nodeLoaded ) {
                        $interval(function() {
                            $scope.gridOptions.data.splice(51,0,
                                {name: 'Dynamic 1', gender: 'female', age: 53, company: 'Griddable grids', balance: 38000, $$treeLevel: 1},
                                {name: 'Dynamic 2', gender: 'male', age: 18, company: 'Griddable grids', balance: 29000, $$treeLevel: 1}
                            );
                            $scope.nodeLoaded = true;
                        }, 2000, 1);
                    }
                });
            }
        };


        $http.get('500_complex.json')
            .success(function(data) {
                for ( var i = 0; i < data.length; i++ ){
                    data[i].state = data[i].address.state;
                    data[i].balance = Number( data[i].balance.slice(1).replace(/,/,'') );
                }
                data[0].$$treeLevel = 0;
                data[1].$$treeLevel = 1;
                data[10].$$treeLevel = 1;
                data[11].$$treeLevel = 1;
                data[20].$$treeLevel = 0;
                data[25].$$treeLevel = 1;
                data[50].$$treeLevel = 0;
                data[51].$$treeLevel = 0;
                tCtrl.gridOptions.data = data;
            });
    }
})();