// example global, local
var a = 1; //global scope

function show() {
  var a = 123; //local scope
  console.log(a); // 123
}

show();

console.log(a); // 1

// scope chain, function scope
var a = 1;

function show() {
  console.log(a); // 1
}

show();

// block scope
function show() {
  console.log(a); //no result
}

{
  //block
  const a = "1"; // only available in this block
}

// develope 브랜치 생성
//test 생성
