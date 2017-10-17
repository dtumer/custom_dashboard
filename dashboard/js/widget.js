var activeWidgets = [
	{
		"name": "My News",
		"widgetId": "news"
	},
	{
		"name": "Clock",
		"widgetId": "clock"
	}
];

app.directive('widget', function() {
	return {
		restrict: 'E',
		templateUrl: 'widget.html',
		controller: 'WidgetController',
		scope: {
			type: '=',
			ndx: '='
		}
	};
})
.controller('WidgetController', function($scope) {
	$scope.init = function() { };

	$scope.init();
});