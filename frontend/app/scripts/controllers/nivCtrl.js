'use strict';

angular.module('nivelation', ['resource.artikale', 'resource.magacinskaN'])

.controller('nivCtrl', function (Artikale, $scope, KarticaN, $location) {
	$scope.articled = Artikale.findByMagCardId({'id': 1});
	var temp = $scope.articled;
	$scope.isVisible = false;
	$scope.error = "";
	
	$scope.addCor = function (newValue) {
		var lastPrice = temp.prosecnaCena;
		var a = isNaN(parseFloat($scope.newQuantity)) ? lastPrice : parseInt($scope.newQuantity);
		if(a === lastPrice){
			$scope.isVisible = true;
			$scope.error = "Nije validan unos. Morate uneti broj.";
		} 
		else {
			$scope.isVisible = false;
			$scope.error = "";
		}
		//kolicina = articled.pocetnoStanjeKol+articled.kolUlaza-articled.kolIzlaza
		var ukupno = temp.pocetnoStanjeKol + temp.kolUlaza - temp.kolIzlaza;
		//articled.pocetnoStanjeVr+articled.vrUlaza-articled.vrIzlaza
		var vrednost = temp.pocetnoStanjeVr + temp.vrUlaza - temp.vrIzlaza;
		//vrednost nivelacije
		var niv = (ukupno * a) - vrednost;
		$scope.articled.prosecnaCena = a;
		if(niv <= 0) {
			//povecavamo izlaz
			$scope.articled.vrIzlaza = temp.vrIzlaza + niv;
		}
		else {
			//povecavamo ulaz
			$scope.articled.vrUlaza = temp.vrUlaza + niv;
		}
		KarticaN.update($scope.articled);
		var magacin = parseInt($scope.articled.magacin.idMagacin);
		$location.path('/lager-list/'+magacin);
	};
	
	$scope.cancel = function () {
		$location.path('/lager-list/'+magacin);
	};
});