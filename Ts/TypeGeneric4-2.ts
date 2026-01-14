//TODO: 다음 함수들을 타입 안전하게 구현하세요 

// 1. 비동기 맵 함수
async function asyncMap<T, U>(
  items: T[],
  callback: (item: T, index: number) => Promise<U>
): Promise<U[]> {
  const results: U[] = [];
  for (let i = 0; i < items.length; i++) {
    results.push(await callback(items[i]!, i));
  }
  return results;
}
// 2. 이벤트 에미터 타입
interface EventMap {
  click: { x: number; y: number };
  keydown: { key: string; code: string };
  submit: { data: Record<string, string> };
}

class TypedEventEmitter<T extends object> {
  private handlers: {
    [K in keyof T]?: Array<(payload: T[K]) => void>;
  } = {};

    on<K extends keyof T>(eventName: K, handler: (payload: T[K]) => void): void {
    (this.handlers[eventName] ??= []).push(handler);
  }

  off<K extends keyof T>(eventName: K, handler: (payload: T[K]) => void): void {
    const list = this.handlers[eventName];
    if (!list) return;
    this.handlers[eventName] = list.filter((h) => h !== handler);
  }

  emit<K extends keyof T>(eventName: K, payload: T[K]): void {
    const list = this.handlers[eventName];
    if (!list) return;
    for (const handler of [...list]) handler(payload);
  }
}
// 테스트
const emitter = new TypedEventEmitter<EventMap>();

emitter.on("click", (event) => {
  console.log(event.x, event.y);  // 타입 추론됨
});

emitter.emit("keydown", { key: "Enter", code: "Enter" });
emitter.emit("click", { x: 100, y: 200 });