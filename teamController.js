var team = angular.module('team', []);

team.controller('teamCtrl', function($scope, $http, $window) {
  console.log('team controller is working');

  $scope.members = [
    {
      name: "Kamal Mango",
      git: "kamalmango",
      pic: "http://bit.ly/29oxW6P",
    },
    {
      name: "Nikita Lebedev",
      git: "nlebedev",
      pic: "http://bit.ly/29xvfRw",
    },
    {
      name: "Chris Choi",
      git: "cmhchoi",
      pic: "http://bit.ly/29rjOJ9",
    },
  ];

});

angular.bootstrap(document.getElementById("team"), ['teamlist']);