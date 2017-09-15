app.directive('widget', function() {
	return {
		restrict: 'E',
		templateUrl: 'widget.html',
		controller: 'WidgetController',
		scope: {
			type: '@'
		}
	};
})
.controller('WidgetController', ['$scope', function($scope) {
	$scope.init = function() {
		
	};

	$scope.init();
}]);