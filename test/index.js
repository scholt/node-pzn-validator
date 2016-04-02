var should = require('chai').should(),
	val = require('../lib/pzn-validator'),
	check = val.isValidPZN;


describe('#isValidPZN() - check correct inputs', function() {
	describe('check correct inputs as integer', function() {
		it('should return true for 10203632', function() {
			check(10203632).should.be.true;
		});
		it('should return true for 4114918', function() {
			check(4114918).should.be.true;
		});
	});
	describe('check correct inputs as string', function() {
		it('should return true for \'10203632\'', function() {
			check('10203632').should.be.true;
		});
		it('should return true for \'4114918\'', function() {
			check('4114918').should.be.true;
		});
	});
	describe('check false inputs for errors as integer', function() {
		it('should return false for 1234567', function() {
			check(1234567).should.be.false;
		});
		it('should return false for 12341234', function() {
			check(12341234).should.be.false;
		});
	});
	describe('check false inputs for errors', function() {
		it('should return false for \'1234567\'', function() {
			check(1234567).should.be.false;
		});

		it('should return false for \'12341234\'', function() {
			check(12341234).should.be.false;
		});

		it('should return false for \'futzlibutzli\'', function() {
			check('futzlibutzli').should.be.false;
		});
	});
});



