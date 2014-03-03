var serviceApp = angular.module('ep08App', []);

serviceApp.service('statesService', function() {
  // privado
  var states = [{
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
    }];
    
  // público
  this.getLetters = function() {
    return "abcdefghijklmnopqrstuvwyz";
  };
  
  this.getToday = function(){
    return new Date();
  };
  
  this.addStateIntoCollection = function(estado, capital, renda) {
    states.push({
      name: estado,
      capital: capital,
      renda: renda
    });
  };

  this.getStates = function() {
    return states;
  };
  
});


//--- AQUI VAI O CONTROLLER (agora mais magro)
serviceApp.controller('controllerEp08', function($scope, statesService) {

  $scope.filtro = "";

  $scope.states = statesService.getStates();
  $scope.today = statesService.getToday();
  $scope.letras = statesService.getLetters();

  $scope.addState = function() {
    statesService.addStateIntoCollection($scope.estado, $scope.capital, 1000);  
    $scope.estado = '';
    $scope.capital = '';
  };
});