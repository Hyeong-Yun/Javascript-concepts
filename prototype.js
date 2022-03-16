// peororype example
function maschine() {
  (this.q = "strike"), (this.w = "snowball");
}
maschine.prototype.name = "Kim";

let item = new maschine();

console.log(item);
console.log(item.name);

// 속성 상속
function f() {
  this.a = 1;
  this.b = 2;
}

let o = new f();
f.prototype.b = 3;
f.prototype.c = 4;

console.log(o.a); // 1
console.log(o.b); // 2 - 함수 f안에서 정의한 b에 의해 prototype에서 정의한 b는 가려진다
console.log(o.c); // 4

// 메소드 상속
const calculate1 = {
  a: 2,
  square: function (b) {
    return this.a ** 2;
  },
};

console.log(calculate1.square());

const calculate2 = Object.create(calculate1);
calculate2.a = 4;

console.log(calculate2.square());

// 프로토타입 vs 클래스
// 프로토타입 - 친구거 쓰는 느낌
function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}

Animal.prototype.say = function () {
  console.log(this.sound);
};

function Dog(name, sound) {
  Animal.call(this, "개", name, sound);
}

Dog.prototype = Animal.prototype;

function Cat(name, sound) {
  Animal.call(this, "고양이", name, sound);
}

Cat.prototype = Animal.prototype;

const dog = new Dog("멍멍이", "멍멍");
const cat = new Cat("야옹이", "야옹");

dog.say();
cat.say();

//클래스 - 부모님한테 물려 받은 느낌
class Animal {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  say() {
    console.log(this.sound);
  }
}

const dog = new Animal("개", "멍멍이", "멍멍");
const cat = new Animal("고양이", "야옹이", "야옹");

dog.say();
cat.say();
