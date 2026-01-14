const a = "hello";          // 타입: "hello" (문자열리터럴)
let b = "hello";            // 타입: string (const는 좁게 let은 넓게)
const c = [1, 2, 3];        // 타입: number[] (숫자 배열)
const d = [1, "two", true]; // 타입: (string | number | boolean)[]
const e = { x: 1, y: 2 };   // 타입: {x: number; y: number}
const f = (x: number) => x * 2; // 타입: (x: number) => number

function g() {
  return { id: 1, name: "Kim" };
}                           // 반환 타입: { id: number; name: string }

const h = [1, 2, 3].map(x => x.toString()); // 타입: string[]