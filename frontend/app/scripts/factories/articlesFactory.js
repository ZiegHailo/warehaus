angular.module('resource.invoice', ['ngResource'])
	.factory('Artikal', function ($resource) {
	return $resource('http://localhost:8080/xws/api/lager-list/:invoiceId',null, {
        'update': { method:'PUT' }
    });
})

