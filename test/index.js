var validator = require('../lib/pzn-validator'),
	check = validator.isValidPZN;

describe('#isValidPZN()', function() {
  
  it('returns true for 10203632', function() {
    validator.isValidPZN(10203632).to.equal(true);
  });
  
  it('returns true for 4114918', function() {
    check('4114918').to.equal(true);
  });

  it('returns true for 1234567', function() {
    check('1234567').to.equal(false);
  });
  
  it('returns true for 12345678', function() {
    check('12345678').to.equal(false);
  });
  
  it('returns false for futzlibutzli', function() {
    check('futzlibutzli').to.equal(false);
  });
});
