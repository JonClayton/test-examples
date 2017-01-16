const Promise = require('bluebird');
const chai = require('chai');

chai.should();

describe('A simple test in chai', () => {
  describe('in braces format', () => {
    it('passes', () => {
      true.should.equal(true);
    });

    it('fails', () => {
      true.should.equal(false);
    });
  });
  describe('with arrow functions', () => {
    it('passes', () => true.should.equal(true));
    it('fails', () => true.should.equal(false));
  });
});

describe('Since these are just AssertionErrors tests will', () => {
  it('fail if you throw an error', () => {
    throw new Error('an error');
  });
  it('pass if you just return an error', () => new Error('an error'));
});

describe('Mocha also understands Promises', () => {
  describe('As result values a Promises', () => {
    it('passes when resolved', () => Promise.resolve());

    it('fails when rejected', () => Promise.reject());
  });
  describe('with arrow functions', () => {
    it('passes when resolved', () => Promise.resolve());
    it('fails when rejected', () => Promise.reject());
  });

  describe('but be careful..with a brace and no return in an arrow functions', () => {
    it('passes when resolved', () => {
      Promise.resolve();
    });
    it('wrongly passes when rejected', () => {
      Promise.reject();
    });
  });

  describe('This is the real magic.  Have a promise perform an asynch action', () => {
    describe('and THEN do test functions that may throw errors', () => {
      it('it will pass when they pass', () =>
        Promise.resolve()
          .then(true.should.equal(true)));
      it('and fail when they fail ', () =>
        Promise.resolve()
          .then(true.should.equal(false)));
      it('and even fail if you use a brace and throw an error', () => {
        Promise.resolve()
          .then(true.should.equal(false));
      });
      it('but do not catch rejected promises and fail to either return a rejected Promise or throw an error', () =>
        Promise.reject()
          .catch(() => new Error('caught')));
    });
  });
});
