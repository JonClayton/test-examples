class Bomb{
  constructor(time = 2 + (Math.random() * 3)){
    console.log('Oh No Batman, another bomb!'); // eslint-disable-line no-console
    this.timer = time;
    this.enabled = true;
    this.explode = 'BOOM!';
    this.ok = 'OK';
  }

  check(thing){
    this.timer += -1;
    switch (thing){
      case 'button':
        console.log(this.explode); // eslint-disable-line no-console
        this.enabled = false;
        return this.explode;
      case 'clock':
        if (this.timer <= 0 && this.enabled){
          console.log(this.explode); // eslint-disable-line no-console
          this.enabled = false;
          return this.explode;
        }
        return this.ok;
      default:
        return null;
    }
  }

  defuse(number){
    if (number < Math.random()){
      this.enabled = false;
    } else {
      console.log(this.explode); // eslint-disable-line no-console
    }
  }
}

class OhNoABomb{
  constructor(time){
    this.count = 0;
    this.bomb = new Bomb(time);
  }

  counting(){
    this.count += 1;
    console.log(this.count); // eslint-disable-line no-console
    const result = this.bomb.check('clock');
    return result === 'OK' ? this.count : result;
  }

  pushButton(){
    return this.bomb.check('button');
  }

  tryToDefuse(){
    const number = Math.random();
    this.bomb.defuse(number);
  }
}

module.exports = OhNoABomb;
/*
let ohNoABomb = new OhNoABomb(3);
console.log("Let's press the button");  // eslint-disable-line no-console
ohNoABomb.pushButton();

ohNoABomb = new OhNoABomb(3);
console.log("Let's just count the ticks");  // eslint-disable-line no-console
ohNoABomb.counting();
ohNoABomb.counting();
ohNoABomb.counting();

ohNoABomb = new OhNoABomb(3);
console.log("Let's try to defuse it");  // eslint-disable-line no-console
ohNoABomb.tryToDefuse();
ohNoABomb.tryToDefuse();
ohNoABomb.tryToDefuse();
ohNoABomb.tryToDefuse();

ohNoABomb = new OhNoABomb();
console.log('This one has no clock on it'); // eslint-disable-line no-console
ohNoABomb.counting();
ohNoABomb.counting();
ohNoABomb.counting();
ohNoABomb.counting();
ohNoABomb.counting();
ohNoABomb.counting();
ohNoABomb.counting();
ohNoABomb.counting();
ohNoABomb.counting();
ohNoABomb.counting();
ohNoABomb.counting();
ohNoABomb.counting();
ohNoABomb.counting();

console.log('-----------------------------'); // eslint-disable-line no-console
*/
