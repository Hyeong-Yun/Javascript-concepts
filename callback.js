function first(callback){
  setTimeout(() =>{
    value = {name : 'Yun', age: 26};
    callback(null, value);
  }, 2000)
}

first((error, value) =>{
  if(error){
    //error handling
  }else{
    console.log(value);
  }
})

function first(callback){
  setTimeout(() =>{
    const value = 1
    callback(null, value);
  }, 2000)
}

function second(callback){
  setTimeout(() =>{
    const value = 2;
    callback(null, value);
  }, 2000)
}

function third(callback){
  setTimeout(() =>{
    const value = 3;
    callback(null, value);
  }, 2000)
}

first((error, value) =>{
  if(error){
    //error handling
    return;
  }else{
    console.log(value)
    second((error2, value2) =>{
      value =value * value2;
      if(error2){
        return;
      }else{
        console.log(value);
        third((error3, value3) =>{
          value = value * value3;
          if(error3){
            return;
          }else{
            console.log(value)
          }
        })
      }
    })
  }
})
// 콜백 헬 발생 가독성이 떨어진다.
// 콜백함수 안에 로직이 있다고 생각하면 복잡해진다.

//promise
const promise = new Promise((resolve, reject) =>{
  setTimeout(() =>{
    const value = 1;
    if(value){
    resolve(value)
    }else{
      reject(new Error('Error occured'))
    }
  }, 2000)
})

promise.then(value =>{
  console.log(value);
  return value;
})
.then(value => {
  value *= 2
  console.log(value)
  return value
})
.then(value => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(value * 3), 2000)
  })
})
.then(value => console.log(value))
.catch(error =>{
  console.log(error)
})

// async await
async function first(){
  return 1;
}

const result = first();
console.log(result)

// 2. await
async function getResult(){
  await delay(1000); //동기적
  throw 'error'
  return 'Yun';
}

async function getResult2(){
  await delay(1000); //동기적
  return 'Hi';
}
// function getResult(){
//   return delay(3000).then(() => 'Yun')
// }

async function pickResult(){
  try{
  const result = await getResult();
  const result2 = await getResult2();
  }catch(e){
    
  }
  return `${result} + ${result2}`
}

pickResult().then(console.log)

async function pickResult(){
  return Promise.all(getResult(),getResult2().then(results => results.join(' + ')))
}
