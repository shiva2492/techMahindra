(function() {
	'use strict';
	angular.module('techMahindraApp.controllers')
		.controller('moreController', [
			'$scope','$http',
			function($scope,$http) {

				$http.get('overallRag_data')
				.success(function(data){
					console.log(data)
					$scope.overallRag_data = data;
					var rag_count = 0;
					angular.forEach($scope.dashboard_data,function(data){
						angular.forEach(data.rag,function(rag){

							rag_count+=parseInt(rag);
						})
						
						data.overall_rag = parseInt(rag_count/5);
						rag_count = 0;
					})
					console.log($scope.dashboard_data)
				})
				.error(function(err){
					console.log('err in http---',err);
				})
			}
		]);
}());