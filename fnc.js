//함수 선언식
function add(x, y) {
  return x + y;
}

//함수 표현식
const add = function b(x, y) {
  return x + y;
};

//화살표 함수 방식
const add = (x, y) => x + y;

let add = function (x, y) {
  return x + y;
};

// 익명 함수
const sayHello = function () {
  console.log("say Hello");
};

sayHello();

// 즉시 실행 함수
(function foo() {
  console.log("foo");
})();

//고차함수
// map
const arr = [1, 2, 3];
const arr1 = arr.map(function (item) {
  return item * 2;
});

console.log(arr1);

// filter
const arr2 = arr.filter(function (item) {
  return item > 1;
});

// reduce
const arr3 = arr.reduce((pre, cur) => pre + cur, 0);

// 객체를 사용한 방식
let hello = new Function("name", "console.log(name)");
hello("Kim");

//화살표 함수 this
function func() {
  this.name = "Hi";
  return {
    name: "bye",
    speak: function () {
      console.log(this.name); // Bye
    },
  };
}

function arrFunc() {
  this.name = "Hi";
  return {
    name: "Bye",
    speak: () => {
      console.log(this.name); // Hi
    },
  };
}

const fun1 = new func();
fun1.speak(); // Bye

const fun2 = new arrFunc();
fun2.speak(); // Hi

// 화살표 함수 생성자 함수로 사용 가능 여부
function fun() {
  this.num = 1234;
}
const arrFun = () => {
  this.num = 1234;
};

const funA = new fun();
console.log(funA.num); // 1234

const funB = new arrFun(); // Error

// arguments 사용 가능 여부
function func() {
  console.log(arguments); // Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
}
fun(1, 2, 3);

const arrFun = () => {
  console.log(arguments); // Uncaught ReferenceError: arguments is not defined
};

fun(1, 2, 3);

// functional programming
//순수함수 -> 멱등성을 보장한다.오로지 매개 변수를 통해 함수 내부로 전달된 인수에게만 의존해 반환값을 만든다.
let count = 0;

function increase(n) {
  return ++n;
}

count = increase(count); // 1
count = increase(count); // 2

// 비순수 함수 -> 외부 상태에 따라 반환값이 달라진다. 따라서 부수 효과가 존재한다. 외부상태에 의존한다.
let count = 0;

function increase() {
  return ++count;
}
increase();
console.log(count); // 1

increase();
console.log(count); // 2

//일급 객체
const result = function () {
  return "hello";
};


const result1 = function (result) {
  return result;
};

console.log(result); //[Function: result]
console.log(result1); //[Function: result1]
console.log(result1(result)); //[Function: result]

