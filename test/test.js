// nothing to see here
var chai = require('chai');
var should = chai.should();
var name = 'peter parker';

describe('BDD', function() {
  describe('Check the type', function() {
    it('Test for string', function() {

		name.should.be.a('string');

    });
  });
});


describe('BDD', function() {
  describe('Is the name correct?', function() {
    it('Test for Peter Parker', function() {

		name.should.equal('peter parker');

    });
  });
});
