'use strict';
app.factory('loginService', function($http) {
	return{
		login:function(data) {
			$http({method: 'POST', url: 'js/json/login_info.json'}).success(function($scope) {
				$scope.msgtxt = 'login info posted to login_info.json'; // response data 
			});
		}
	}
})
.factory('courseFormService', function($http) {
	return{
		addCourse:function(data) {
			$http({method: 'POST', url: 'js/json/course_info.json'}).success(function($scope) {
				$scope.msgtxt = 'course info posted to course_info.json'; // response data 
			});
		}
	}
})/* -- will deal with this later --
.factory('fileFormService', [function($http) {
	return{
		addFile:function(data) {
			$http({method: 'POST', url: 'js/file_info.json'}).success(function(msg, $scope) {
				$scope.msgtxt = 'course info posted to course_info.json'; // response data 
			});
		}
	}
}])*/
.factory('facultyFormService', function($http) {
	return{
		addFaculty:function(data) {
			$http({method: 'POST', url: 'js/json/faculty_info.json'}).success(function($scope) {
				$scope.msgtxt = 'faculty info posted to faculty_info.json'; // response data 
			});
		}
	}
})
.factory('studentFormService', function($http) {
	return{
		addStudent:function(data) {
			$http({method: 'POST', url: 'js/json/student_info.json'}).success(function($scope) {
				$scope.msgtxt = 'student info posted to student_info.json'; // response data 
			});
		}
	}
});


