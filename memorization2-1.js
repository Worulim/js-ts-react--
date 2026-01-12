function createMemoizedFibonacci() {
  
}

// 테스트
const fib = createMemoizedFibonacci();
console.log(fib(10));  // 55
console.log(fib(50));  // 12586269025 (빠르게 계산되어야 함)
console.log(fib(10));  // 55 (캐시에서 가져옴)