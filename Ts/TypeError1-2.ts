// 에러 1
const user: { name: string; age: number; email?:string} = {
  name: "Kim",
  age: 25
  //email: ""
};
user.email = "kim@test.com";

// 에러 2
function double(value: number) {
  return value * 2;
}

// 에러 3
const numbers : (number | string)[] = [1, 2, 3];
numbers.push("four");
//numbers.push(4);

// 에러 4
function greet(name: string, age?: number) {
//꼭 넣지 않아도 되는 매개변수로 지정
    //필수를 먼저 쓰고 부수적인걸 뒤에써야댐
  return `Hello,${name}. You are${age} years old.`;
}
greet("Kim");
//greet("Kim", 24);

// 에러 5
const config: { port: number | string; host: string } = {
  port: 3000,
  host: "localhost"
};
config.port = "3001";
//config.port = 3001;