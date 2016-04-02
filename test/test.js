var assert = require('assert'),
 validator = require('../lib/pzn-validator'),
 check = validator.isValidPZN;


describe('Validator', function() {
  describe('#isValidPZN()', function () {
    it('should return true for 10203632', function () {
      validator.isValidPZN(10203632).should.equal(1);
    });
  });
});

