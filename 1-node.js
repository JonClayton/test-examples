const chai = require('chai');

chai.should();

console.log(`console of passing test: ${true.should.equal(true)}`);  // eslint-disable-line no-console
console.log(`console of passing test: ${JSON.stringify(true.should.equal(true))}`);  // eslint-disable-line no-console
console.log(`console of failing test: ${true.should.equal(false)}`);  // eslint-disable-line no-console
