(function() {
	'use strict';
	angular.module('techMahindraApp.controllers')
		.controller('homeController', [
			'$scope','$http','$state',
			function($scope,$http,$state) {
				
				$http.get('dashboard_data')
				.success(function(data){
					console.log(data)
					$scope.dashboard_data = data;
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

				$scope.drillDown = function(){
					$state.go('more');
				}



			}
		]);
}());