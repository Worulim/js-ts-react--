function createCounter(initialValue = 0) {
  let value = initialValue;

  return {
    increment: () => (value = value + 1),
    decrement: () => (value = value - 1),
    getValue: () => value,
    reset: () => (value = initialValue),
  };
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

// counter2는 counter랑 완전 별개로 값 관리됨
console.log(counter2.getValue()); // 10
