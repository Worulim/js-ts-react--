function createCounter(initialValue = 0) {
	let value = 0;
  //TODO: 구현하세요
}

// 테스트
const counter = createCounter(10);
const counter2 = createCounter(10);
console.log(counter.increment()); // 11
console.log(counter.increment()); // 12
console.log(counter.decrement()); // 11
console.log(counter.getValue());  // 11
counter.reset();
console.log(counter.getValue());  // 10