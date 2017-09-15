var app = angular.module('custom_dashboard', []);

app.controller('DashboardController', ['$scope', function($scope) {
	$scope.init = function() {
		$scope.widget = {};

		$scope.widget.news = 'news';
		$scope.widget.clock = 'clock';
	}

	$scope.init();
}]);