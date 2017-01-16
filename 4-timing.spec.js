const chai = require('chai');
const CountSlowly = require('./4-timing');

chai.should();

describe('Testing this slow counter', () => {
  describe('gets into trouble quickly', () => {
    describe('because the count does not change fast enough', () => {
      const countSlowly = new CountSlowly();
      before('we use the up function', () => {
        countSlowly.up();
      });
      it('but the test fails', () => {
        countSlowly.count.should.equal(1);
      });
    });
    describe('this can be solved with callbacks', () => {
      const countSlowly = new CountSlowly();
      before('we use the up function', (done) => {
        countSlowly.upCallback(done);
      });
      it('and the test passes after waiting for the before to complete', () => {
        countSlowly.count.should.equal(1);
      });
    });
    describe('Mocha understands promises so no done needed', () => {
      const countSlowly = new CountSlowly();
      before('we use the up function', () => countSlowly.upPromise());  // don't forget to return promise
      it('and the test passes after waiting for the before to complete', () => {
        countSlowly.count.should.equal(1);
      });
    });
    describe('And you can do away with the before by using .then', () => {
      const countSlowly = new CountSlowly();
      it('and the test still passes', () =>
          countSlowly.upPromise()
            .then(() => countSlowly.count.should.equal(1))); // be careful to call the function only when you get here
    });
    describe('even better if the promise returns the value you are interested in', () => {
      const countSlowly = new CountSlowly();
      const test = count => count.should.equal(1);
      it('and the test still passes', () => countSlowly.upPromiseWithCount().then(test));
    });
  });
});
