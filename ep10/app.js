// DICA:
// Usar SimpleHTTPServer como servidor http para testes
//
// jnaves@skynet:~/Dropbox/courses/angular-course/ep10$ python -m SimpleHTTPServer
// Serving HTTP on 0.0.0.0 port 8000 ...

// necessário definir a dependência ngRoute
var serviceApp = angular.module('ep10App', ['ngRoute']);

 // Note: Providers can only be injected into config functions. Thus you could not inject $routeProvider into PhoneListCtrl. 
serviceApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/states', { templateUrl: 'list.html', controller: 'controllerEp10'}).
      when('/create', { templateUrl: 'create.html', controller: 'controllerEp10'}).
      when('/delete', { templateUrl: 'list.html', controller: 'controllerEp10'}).
      otherwise({
        redirectTo: '/states'
      });
  }
]);

// habilita CORS 
serviceApp.config(['$httpProvider', function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);


serviceApp.service('statesService', function($http, $rootScope) {
  
  // público
  this.getLetters = function() {
    return "abcdefghijklmnopqrstuvwyz";
  };
  
  this.getToday = function(){
    return new Date();
  };
  
  this.addStateIntoCollection = function(estado, capital, renda) {
    // como acessar esta variável ?
    $rootScope.states.push({
      name: estado,
      capital: capital,
      renda: renda
    });
  };

  this.removeStateFromCollection = function(i) {
    $rootScope.states.splice(i, 1);
  };  

  this.getStates = function(callback) {
    $http.get('http://statesapi.apiary.io/app.apiary.io/states').success(callback);
  };

});


// Inicialização
serviceApp.run ( function($rootScope, statesService) {
  
  // carrega os estados
  statesService.getStates(function(data){
    $rootScope.states = data;
  });
  
});

//--- AQUI VAI O CONTROLLER (agora mais magro)
serviceApp.controller('controllerEp10', function($scope, $location, statesService) {

  $scope.filtro = "";
  
  $scope.today = statesService.getToday();
  $scope.letras = statesService.getLetters();

  $scope.addState = function() {
    statesService.addStateIntoCollection($scope.estado, $scope.capital, 1000); 
    $location.path('#states');
  };

  $scope.deleteState = function(index) {
    statesService.removeStateFromCollection(index); 
    $location.path('#states');
  };

});
