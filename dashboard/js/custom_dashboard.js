app.controller('DashboardController', function($scope, LocalStorageService) {
	$scope.init = function() {
		$scope.layout = {};

		// var testLayout = {
		// 	"cell_layout": "col3",
		// 	"loaded_widgets": [
		// 		"none",
		// 		"clock",
		// 		"news"
		// 	]
		// }

		//LocalStorageService.setLayout(testLayout);
		$scope.setupLayout();
	}

	//setup the layout of the columns if its there
	$scope.setupLayout = function() {
		var layout = LocalStorageService.getLayout();

		if (layout !== undefined) {
			$scope.layout.cell_layout = layout.cell_layout;
			$scope.layout.loaded_widgets = layout.loaded_widgets;
		}
	};

	$scope.init();
})
//service for loading and changing the localstore
.service('LocalStorageService', function() {
	var service = this;

	service.getLayout = function() {
		return JSON.parse(localStorage.layout);
	}

	service.setLayout = function(layout) {
		localStorage.layout = JSON.stringify(layout);
	}

	service.setWidget = function(ndx, widgetId) {
		var layout = this.getLayout();

		if (layout !== undefined && layout.loaded_widgets !== undefined) {
			layout.loaded_widgets[ndx] = widgetId;

			this.setLayout(layout);
		}
	}

	service.removeWidget = function(ndx) {
		var layout = this.getLayout();

		if (layout !== undefined && layout.loaded_widgets !== undefined) {
			layout.loaded_widgets[ndx] = 'none';

			console.log(layout);

			this.setLayout(layout);
		}	
	}

	return service;
});