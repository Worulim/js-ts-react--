console.log('1');

setTimeout(() => console.log('2'), 0);

Promise.resolve()
  .then(() => console.log('3'))
  .then(() => console.log('4'));

setTimeout(() => {
  console.log('5');
  Promise.resolve().then(() => console.log('6'));
}, 0);

Promise.resolve().then(() => {
  console.log('7');
  setTimeout(() => console.log('8'), 0);
});

console.log('9');