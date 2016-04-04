/**
 * http://usejsdoc.org/
 */


//ng-app 
//var myApp = angular.module('myApp',[]);
//
//myApp.controller('todoCtrl', function($scope) {
//	$scope.appName = 'AngularJS TODO APP';
//	$scope.todoList =	[{done : true, title : "AngularJS 독서"},
//	                     {done : false, title : "AngularJS 공부하기"},
//	                     {done : false, title : "개인 프로젝트 구성"}
//	                    ];
//	$scope.addNewTodo = function (newTitle) {
//		$scope.todoList.push({done:false, title:newTitle});
//		$scope.newTitle = '';
//	}
//	
//});

angular.module('myApp', []).controller('todoCtrl', ['$scope', todoCtrl]);

function todoCtrl($scope) {
	$scope.appName = 'AngularJS TODO APP';
	$scope.todoList = [];
//	$scope.todoList =	[{done : true, title : "AngularJS 독서"},
//	                     {done : false, title : "AngularJS 공부하기"},
//	                     {done : false, title : "개인 프로젝트 구성"}
//	                    ];
	$scope.addNewTodo = function (newTitle) {
		$scope.todoList.push({done:false, title:newTitle});
		$scope.newTitle = '';
		console.log('addNewTodo');
	};
	
	$scope.archive = function() {
		for (var i=$scope.todoList.length-1; i>=0; i--) {
			if($scope.todoList[i].done) {
				$scope.todoList.splice(i,1);
			}
		}
//		for (var i=0; i<$scope.todoList.length; i++) {
//			if($scope.todoList[i].done) {
//				$scope.todoList.splice(i,1);
//			}
//		}
	};
	
	$scope.remain = function() {
		var count = 0;
/*		angular.forEach($scope.todoList, function(value, key) {
			if (!value.done) {
				count ++;
			}
		})
		return count;*/
		
		
		for (var i=0; i<$scope.todoList.length; i++) {
			if(!$scope.todoList[i].done) {
				count ++;
			}
		}
		return count;
	}
};






