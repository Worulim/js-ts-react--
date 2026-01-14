type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

//TODO: 다음 함수들을 구현하세요

// 1. stringify: JsonValue를 문자열로 변환
function stringify(value: JsonValue): string {
    if (value === null){
        return "null";
        //typeof을 하면 object로 나옴
    }
    else if (typeof value === "string"){
       return value;
    }
    else if (typeof value === "number"){
        return String(value);
    }
    else if(typeof value === "boolean"){
        return value? "true" : "false";
        //삼항 연산자: 조건? 참일때 값 : 거짓일때 값
    }
    else if (typeof value === "object"){
        if (Array.isArray(value)){
            return `[${value.map(v => stringify(v)).join(",")}]`;
        }
        else {
            const entries = Object.entries(value).map(([k, v]) => `${JSON.stringify(k)}:${stringify(v)}`).join(",");
            return `{${entries}}`;
        }
    }
    throw new Error("Invalid JsonValue");
}
// 2. getType: JsonValue의 타입을 문자열로 반환
function getType(value: JsonValue): string {
  if (value === null){
        return "null";
        //typeof을 하면 object로 나옴
    }
    else if (typeof value === "string"){
       return "string";
    }
    else if (typeof value === "number"){
        return "number";
    }
    else if(typeof value === "boolean"){
        return "boolean"
    }
    else if (typeof value === "object"){
        if (Array.isArray(value)){
            return "array"
        }
        else{
            return "object"
        }
    }
    throw new Error("Invalid JsonValue");
}

// 3. deepClone: JsonValue를 깊은 복사
function deepClone(value: JsonValue): JsonValue {
  if (value === null) return null;

  const t = typeof value;

  if (t === "string" || t === "number" || t === "boolean") {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((v) => deepClone(v));
  }

  const obj = value as { [key: string]: JsonValue };
  const cloned: { [key: string]: JsonValue } = {};

  for (const [k, v] of Object.entries(obj)) {
    cloned[k] = deepClone(v);
  }

  return cloned;
}




// 테스트
console.log(stringify("hello"));       // "hello"
console.log(stringify(42));            // "42"
console.log(stringify([1, 2, 3]));     // "[1,2,3]"
console.log(stringify({ a: 1 }));      // '{"a":1}'

console.log(getType("hello"));         // "string"
console.log(getType([1, 2]));          // "array"
console.log(getType({ a: 1 }));        // "object"
console.log(getType(null));            // "null"