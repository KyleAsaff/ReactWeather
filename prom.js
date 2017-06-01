function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if(typeof a === 'number' && typeof b === 'number') {
      var res = a + b;
      resolve(res)
    } else {
      reject('not a number');
    }
  })
}

addPromise(4, 1).then(function(added) {
  console.log(added);
}, function(errorMsg) {
  console.log(errorMsg);
})

addPromise('4', 1).then(function(added) {
  console.log(added);
}, function(errorMsg) {
  console.log(errorMsg);
})
