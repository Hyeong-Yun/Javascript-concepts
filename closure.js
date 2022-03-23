function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc(); // == displaynemn
console.log(myFunc); // displname [function]
myFunc(); // Mozila

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5);
console.log(add5(2));
console.log(add10(2));

function jane() {
  const name = "jane";
  const mid = "A";
  const final = "B+";

  return {
    getMid: () => mid,
    getFinal: () => final,
    setMid: (score) => (mid = score),
    setFinal: (score) => (final = score),
  };
}

jane().getMid(); // A
jane().getFinal(); // B+

let stories = "Medium Story";

let medium = (function () {
  let stories = ["halo", "Hello", "Hi"];
  return { getStories: stories };
})();

let hh = (function () {
  let stories = ["halo", "Hello", "Hi"];
  return { getStories: stories };
})();

// console.log(medium.stories); // undefined
console.log(hh);
