// 객체 리터럴
const module = {
  key: "data",
  publicMethod: function () {
    return this.key;
  },
};

console.log(module.key); // data
console.log(module.publicMethod); // data

// 클로져 방식
const module = function () {
  const privateKey = 0;
  function privateMethod() {
    return privateKey++;
  }
  return {
    publicKey: privateKey,
    publicMethod: function () {
      return privateMethod();
    },
  };
};

console.log(module.publicMethod()); // 0
console.log(module.publicMethod()); // 1
