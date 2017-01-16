const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const OhNoABomb = require('./3-Boom');

chai.should();
chai.use(sinonChai);

describe('Testing OhNoABomb:', () => {
  describe('testing counting method', () => {
    describe('integrated', () => {
      const ohNoABomb = new OhNoABomb(3);
      it('first time returns 1', () => {
        ohNoABomb.counting().should.equal(1);
      });
      it('second time returns 2', () => {
        ohNoABomb.counting().should.equal(2);
      });
      it('third time returns BOOM!', () => {
        ohNoABomb.counting().should.equal('BOOM!');
      });
    });

    describe('unit test', () => {
      const ohNoABomb = new OhNoABomb(3);
      const spy = sinon.stub(ohNoABomb.bomb, 'check');
      spy.returns('BOOM!');
      const result = ohNoABomb.counting();
     it('returns "BOOM" if bomb blows', () => {
      result.should.equal('BOOM!');
     });
    });

/*
      const spy = sinon.spy(ohNoABomb.bomb, 'check');
      console.log(`spy count is: ${spy.callCount}`);
      console.log(`spy returnValues is: ${spy.returnValues}`);
     console.log(`spy args is: ${spy.args}`);
     spy.reset(); // talk about sinon.test versus spy.reset()
*/

      it('returns the count if bomb does not blow', () => {
        const ohNoABomb = new OhNoABomb(3);
        const spy = sinon.stub(ohNoABomb.bomb, 'check');
        spy.returns('OK');
        let result = ohNoABomb.counting();
        result.should.equal(ohNoABomb.count);
        spy.should.always.have.been.calledWith('clock');
        spy.reset();
      });
  });

  describe('testing pushButton method', () => {
    it('is a short integration test', () => {
      const ohNoABomb = new OhNoABomb();
      ohNoABomb.pushButton().should.equal('BOOM!');
    });
    it('or a slightly longer unit test', sinon.test(() => {  // talk about sinon.test if you haven't
      const ohNoABomb = new OhNoABomb();
      const stub = sinon.stub(ohNoABomb.bomb, 'check');
      stub.returns('BOOM!')
      result = ohNoABomb.pushButton();
      stub.should.always.be.calledWith('button');
      stub.should.have.been.calledOnce;
      result.should.equal('BOOM!');
    }));
  });

  describe('testing defuse method', () => {
    it('an integration test seems impossible');
    it('a unit test is easy', sinon.test(() => {
      const ohNoABomb = new OhNoABomb();
      const stub = sinon.stub(ohNoABomb.bomb, 'defuse');
      ohNoABomb.tryToDefuse();
      stub.should.have.been.calledOnce;
      stub.args[0][0].should.be.a('number');
      stub.args[0][0].should.be.within(0,1);
    }));
  });
});
