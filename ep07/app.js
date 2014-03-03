var mvcApp = angular.module('i10NApp', []);

mvcApp.controller('controller', function($scope) {

  $scope.data = new Date();

  $scope.letras = "abcdefghijklmnopqrstuvwyz";

  $scope.filtro = "";

  $scope.states = [{
      name: 'Minas Gerais',
      capital: 'Belo Horizonte',
      renda: 2000
    }, {
      name: 'São Paulo',
      capital: 'São Paulo',
      renda: 2999.45
    }, {
      name: 'Paraíba',
      capital: 'João Pessoa',
      renda: 2000
    }, {
      name: 'Rio de Janeiro',
      capital: 'Rio de Janeiro',
      renda: 2000
    },
    {
      name: 'Santa Catarina',
      capital: 'Florianópolis',
      renda: 3000
    }, {
      name: 'Pernambuco',
      capital: 'Recife',
      renda: 2000
    },
    {
      name: 'Espírito Santo',
      capital: 'Vitória',
      renda: 2000
    }
  ];

  $scope.addState = function() {
    $scope.states.push({
      name: $scope.estado,
      capital: $scope.capital,
      renda: 1000
    });
    $scope.estado = '';
    $scope.capital = '';
  };

});