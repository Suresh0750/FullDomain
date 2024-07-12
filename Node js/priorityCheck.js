console.log('Start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

setImmediate(() => {
  console.log('setImmediate');
});

 Promise.resolve().then(() => {
  console.log('Promise resolved');
});

process.nextTick(() => {
  console.log('process.nextTick 1');
});

process.nextTick(() => {
  console.log('process.nextTick 2');
});

console.log('End');


// # Result
// Start
// End
// process.nextTick 1
// process.nextTick 2
// Promise resolved
// setImmediate
// setTimeout
