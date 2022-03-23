//실행 컨텍스트
let global = "globalLet";

function foo() {
  let fooLet = "fooLet";
  console.log(global);
  function bar() {
    let barLet = "barLet";
    console.log(barLet);
  }
  bar();
}

foo();

//콜 스택
//bar
//foo
//global
