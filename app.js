

var app=angular.module("myApp",[]);
app.controller("myCtr", ($scope,$http)=>{
   

$scope.remove=function(Player){
    var removedPlayer=$scope.Players.indexOf(Player);
    $scope.Players.splice(removedPlayer,1);
};
$scope.add=function(){
    
    $scope.Players.push({
        name:$scope.nname,
        id:$scope.nid,
        runs:$scope.nruns
    })
};
$http.get("data.json").then(function(item)
{
    $scope.Players=item.data;
})
});