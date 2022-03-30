//실행 컨텍스트
let global = "globalLet 1";

function foo() {
  let fooLet = "fooLet";
  console.log(global);
  function bar() {
    let barLet = "barLet 2";
    console.log(barLet);
  }
  bar();
  console.log("barOut 3");
}

foo();
console.log("fooOut 4");
console.log("globalIn 5");

// 콜 스택
//barOut 3
// fooOut 4
// globalIn 5
