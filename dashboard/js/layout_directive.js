app.directive('layout', function() {
	return {
		restrict: 'E',
		templateUrl: 'layout_template.html',
		controller: 'LayoutController',
		scope: {
			loadedWidgets: '=',
			type: '@'
		}
	};
})
.controller('LayoutController', function($scope) {
	$scope.init = function() {
		
	};

	$scope.init();
});