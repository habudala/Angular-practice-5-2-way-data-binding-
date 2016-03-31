// creating a module called myModule
var variable = angular.module("myModule",[]);



												// // creating a controller called myController
												// var myController  function($scope){
												// 	$scope.message = "Angular js tutorial";
												// }
												// //registering controller with module
												// myApp.controller("myController", myController);



//or alternatively, I can do the above two lines in one>>>
variable.controller("myController", function($scope){
	//bellow I'm adding a property of message to the scope object (in the view)
	// $scope.message = "Hello there ..."



	//Let's work with some more complex data types than just a message... objects for instance!
	var employee = {firstName: "Laszlo", lastName: "Habuda", gender: "Male"};

	$scope.employee = employee;



});
