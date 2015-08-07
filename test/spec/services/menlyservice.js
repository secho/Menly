'use strict';

describe('Service: Menlyservice', function () {

  // load the service's module
  beforeEach(module('menlyApp'));

  // instantiate service
  var Menlyservice;
  beforeEach(inject(function (_Menlyservice_) {
    Menlyservice = _Menlyservice_;
  }));

  it('should do something', function () {
    expect(!!Menlyservice).toBe(true);
  });

});
