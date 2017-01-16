const Promise = require('bluebird');

class CountSlowly{
  constructor(){
    this.count = 0;
  }

  add(){
    this.count += 1;
  }

  up(){
    setTimeout(this.add, 200);
  }

  upCallback(callback){
    setTimeout(() => {
      this.add();
      callback();
    }, 200);
  }

  upPromise(){
    return new Promise((resolve) => {
      setTimeout(() => {
        this.add();
        resolve();
      }, 200);
    });
  }

  upPromiseWithCount(){
    return new Promise((resolve) => {
      setTimeout(() => {
        this.add();
        resolve(this.count);
      }, 200);
    });
  }

}

module.exports = CountSlowly;
