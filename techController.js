var tech = angular.module('tech', []);

tech.controller('techCtrl', function($scope, $http, $window) {
  console.log('tech controller is working');

  $scope.stacks = [
    {
      name: "Three.js",
      des: "Augmented Reality",
      pic: "http://bit.ly/29ijLQU",
    },
    {
      name: "React Native",
      des: "Mobile App",
      pic: "http://bit.ly/29kPHjs",
    },
    {
      name: "Redux",
      des: "State Container",
      pic: "http://bit.ly/29ijOYA",
    },
    {
      name: "Node.js",
      des: "Server",
      pic: "http://bit.ly/29OUDhK",
    },
    {
      name: "Express",
      des: "Server Framework for Node.js",
      pic: "http://bit.ly/29ijTeP",
    },
    {
      name: "PostgresSQL",
      des: "Relational Database Management System",
      pic: "http://bit.ly/29rJ1ly",
    },
    {
      name: "PostGIS",
      des: "Geographic Objects for PostgresSQL",
      pic: "http://bit.ly/29ninuM",
    },
    {
      name: "AWS",
      des: "Deployment/ Cloud Storage",
      pic: "http://bit.ly/29hVkhx",
    },
  ];

});

angular.bootstrap(document.getElementById("tech"), ['techlist']);
