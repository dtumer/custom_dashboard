app.directive('none', function() {
	return {
		restrict: 'E',
		templateUrl: '../widgets/none/none.html',
		scope: {
			ndx: '='
		}
	};
})
//controller for the null widget
.controller('NoneController', ['$scope', 'LocalStorageService', '$window', function($scope, LocalStorageService, $window) {
	$scope.init = function() {
		console.log(activeWidgets);
		$scope.activeWidgets = activeWidgets;
	};

	//loads the widget that is selected and saves it to the local browser storage
	$scope.selectWidget = function(widget) {
		LocalStorageService.setWidget($scope.ndx, widget);

		$window.location.reload();
	}

	$scope.init();
}]);