'use strict';

/* Controllers */

angular.module('asucssd.controllers', [])
.controller('homeCtrl', function($scope) {
	})
.controller('loginCtrl', function ($scope, loginService) {
	$scope.msgtxt='';
	$scope.login=function(user){
		$scope.json = angular.toJson($scope.user, [pretty]); // temporary json storage
		loginService.login(user); //call login service
	};
})
.controller('courseFormCtrl', function($scope, courseFormService) {
	$scope.msgtxt='';
	$scope.addCourse=function(course) {
		$scope.json = angular.toJson($scope.course, [pretty]); // temporary json storage
		addFormService.addCourse(course); //call courseFormService

	$scope.master = {};

    $scope.update = function(course) {
      $scope.master = angular.copy(course);
    };

    $scope.reset = function() {
      $scope.course = angular.copy($scope.master);
    };

    $scope.isUnchanged = function(course) {
      return angular.equals(course, $scope.master);
    };
    $scope.reset();
	}
})/* --will work on this later since it isn't text--
.controller('fileFormCtrl', [function($scope, fileFormService) {
  	$scope.addFile=function(file){
		addFormService.addFile(file); //call fileFormService
	}

	$scope.master = {};

    $scope.update = function(file) {
      $scope.master = angular.copy(file);
    };

    $scope.reset = function() {
      $scope.file = angular.copy($scope.master);
    };

    $scope.isUnchanged = function(file) {
      return angular.equals(file, $scope.master);
    };
    $scope.reset();
}])*/
.controller('facultyFormCtrl', function($scope, facultyFormService) {
	$scope.msgtxt='';
	$scope.addFaculty=function(faculty){
		$scope.json = angular.toJson($scope.faculty, [pretty]); // temporary json storage
		addFormService.addFaculty(faculty); //call facultyFormService
	}

	$scope.master = {};

    $scope.update = function(faculty) {
      $scope.master = angular.copy(faculty);
    };

    $scope.reset = function() {
      $scope.faculty = angular.copy($scope.master);
    };

    $scope.isUnchanged = function(faculty) {
      return angular.equals(faculty, $scope.master);
    };
    $scope.reset();
})
.controller('studentFormCtrl', function($scope, studentFormService) {
	$scope.msgtxt='';
	$scope.addStudent=function(student) {
		$scope.json = angular.toJson($scope.student, [pretty]); // temporary json storage
		addFormService.addStudent(student); //call studentFormService
	}

	$scope.master = {};

    $scope.update = function(student) {
      $scope.master = angular.copy(student);
    };

    $scope.reset = function() {
      $scope.student = angular.copy($scope.student);
    };

    $scope.isUnchanged = function(student) {
      return angular.equals(student, $scope.master);
    };
    $scope.reset();
});





