'use strict';

describe('Controller: GlossCtrl', function () {

  // load the controller's module
  beforeEach(module('menlyApp'));

  var GlossCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GlossCtrl = $controller('GlossCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GlossCtrl.awesomeThings.length).toBe(3);
  });
});
