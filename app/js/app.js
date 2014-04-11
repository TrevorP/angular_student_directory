'use strict';
// Declare app level module which depends on filters, and services
var app=angular.module('asucssd', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {templateUrl: 'partials/tpl/login.tpl.html', controller:'loginCtrl'});
  $routeProvider.when('/addCourse', {templateUrl: 'partials/tpl/course_form.tpl.html', controller:'courseFormCtrl'});
  $routeProvider.when('/addFaculty', {templateUrl: 'partials/tpl/faculty_form.tpl.html', controller:'facultyFormCtrl'});
  $routeProvider.when('/addStudent', {templateUrl: 'partials/tpl/student_form.tpl.html', controller:'studentFormCtrl'});
  $routeProvider.when('/home', {templateUrl: 'partials/tpl/home.tpl.html'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
