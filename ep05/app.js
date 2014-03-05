var mvcApp = angular.module('episodio5App', []);

mvcApp.controller('ep05Controller', function ep05Controller($scope) {
	
	$scope.states = [
		{name:'Minas Gerais', capital: 'Belo Horizonte'},
		{name:'São Paulo', capital: 'São Paulo'},
		{name:'Paraíba', capital: 'João Pessoa'},
		{name:'Rio de Janeiro', capital: 'Rio de Janeiro'},
		{name:'Espírito Santo', capital: 'Vitória'}
	];

	$scope.addState = function() {
		$scope.states.push({name : $scope.estado, capital : $scope.capital});
		$scope.estado = '';
		$scope.capital = '';
	};
	
  $scope.incrementa = function() {
    $scope.contador = $scope.contador + 1;
  };
  
	$scope.gostei = false;
	$scope.escondido = false;
	$scope.contador = 0;
});