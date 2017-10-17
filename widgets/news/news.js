var NewsApi = {
	apiKey: "a04bf8e3d9c8414daf4d778538fcd6b2",
	url: "https://newsapi.org/v1/articles?"
};

app.directive('myNews', function() {
	return {
		restrict: 'E',
		templateUrl: '../widgets/news/news.html'
	};
})
//controller for managing the news section
//TODO:
////	Add way for user to specify which news organization to grab articles from
.controller('NewsController', ['NewsService', '$scope', 'LocalStorageService', '$window', function(NewsService, $scope, LocalStorageService, $window) {
	$scope.init = function() {
		$scope.getArticles();
	};

	$scope.getArticles = function() {
		NewsService.getArticles("techcrunch", "latest")
		.then(function(response) {
			$scope.newsTitle = NewsService.data.title;
			$scope.articles = NewsService.data.articles;
		}, function(error) {
			//error
		});
	};

	// removes widget from the local storage
	$scope.removeWidget = function() {
		LocalStorageService.removeWidget($scope.ndx);

		$window.location.reload();
	};

	$scope.init();
}])
//service for retreiving sources
.service('NewsService', function($http, $q) {
	var service = this;

	service.getArticles = function(source, sortBy) {
		var defer = $q.defer();
		var url = NewsApi.url+"source=" + source + "&apiKey=" + NewsApi.apiKey + "&sortBy=" + sortBy;

		$http.get(url)
		.then(function(response) {
			service.data = response.data;
			console.log(response);
			defer.resolve(response);
		}, function(error) {
			defer.reject(error);
		});

		return defer.promise;
	}

	return service;
})
//factory containing all the news sources that can be found
.factory('NewsSourcesFactory', [function() {
	var factory = {};

	factory.getNewsSources = function() {
		return [
			"techcrunch",
			"cnn"
		];
	}

	return factory;
}])
// service for checking what source the user has currently selected
.service('NewsPreferencesService', [function() {
	var service = this;

	//TODO: add function for retrieving preferences for this news widget

	return service;
}]);