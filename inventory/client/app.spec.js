describe('MainCtrl', function() {
  var $rootScope;
  var $controller;

  beforeEach(module('inventoryApp'));

  beforeEach(inject(function($injector) {
    $rootScope = $injector.get('$rootScope');
    $controller = $injector.get('$controller');
    $scope = $rootScope.$new();
  }));

  beforeEach(inject(function($controller) {
    MainCtrl = $controller('MainCtrl');
  }));

  // beforeEach(module('inventoryApp'));


  // beforeEach(inject(function(_$controller_){
  //   $controller = _$controller_;
  // }));

  it('should initially show 5 blank input fields', function() {
    console.log($scope)
    var $scope = {};
    var controller = $controller('MainCtrl', { $scope: $scope });
    expect($scope.items.length).toEqual(5);
  });

});
