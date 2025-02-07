'use strict';

angular.module('sektorNew', [])

.controller('sektorNewCtrl', function ($scope, $routeParams, $modal, $log, $location, $route, $modalInstance ) {

	$scope.ok = function () {
		
		$modalInstance.close({'selectedSektor':$scope.selectedSektor,
								'action':'save'});
	};

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};

	$scope.selektujPreduzece = function (invoiceItem, size) {

		
		var modalInstance = $modal.open({
			templateUrl: 'views/preduzece-modal.html',
			controller: 'preduzecaModalCtrl',
			size: size,
			scope: $scope ,
			resolve: {
				invoiceItem: function () {
					return $scope.invoiceItem;
				}
			}
		});
		modalInstance.result.then(function (data) {
			
			var selectedPreduzece = data.selectedPreduzece;
			//ako stavka fakture nema id i ako je akcija 'save' znaci da je nova i dodaje se u listu. ako ima, svakako se manja u listi

			if( data.action==='save')
				$scope.selectedSektor.preduzece = selectedPreduzece;
			},
            function (response) {
                if (response.status === 500) {
                    $scope.greska = "greska";
                }
			$route.reload();
			//ako stavka treba da se obrise izbaci se iz niza
			
		}, function () {
			$log.info('Modal dismissed at: ' + new Date());
		});}
		
});
