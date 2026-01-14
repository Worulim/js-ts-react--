//TODO: 다음 클래스들을 구현하세요

// 1. Stack<T>: push, pop, peek, isEmpty, size
class Stack<T> {
  private items: T[] = [];

  push(value: T): void {
    this.items.push(value);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  get size(): number {
    return this.items.length;
  }
}

// 2. Queue<T>: enqueue, dequeue, front, isEmpty, size
class Queue<T> {
  private items: T[] = [];
  private head = 0;

  enqueue(value: T): void {
    this.items.push(value);
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) return undefined;

    const value = this.items[this.head];
    this.head++;

    if (this.head > 50 && this.head * 2 >= this.items.length) {
      this.items = this.items.slice(this.head);
      this.head = 0;
    }

    return value;
  }

  front(): T | undefined {
    return this.isEmpty() ? undefined : this.items[this.head];
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  get size(): number {
    return this.items.length - this.head;
  }
}

// 3. LinkedList<T>: append, prepend, delete, find, toArray
class LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T> | null;

  constructor(value: T, next: LinkedListNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList<T> {
  private head: LinkedListNode<T> | null = null;
  private tail: LinkedListNode<T> | null = null;

  append(value: T): void {
    const node = new LinkedListNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    this.tail!.next = node;
    this.tail = node;
  }

  prepend(value: T): void {
    const node = new LinkedListNode(value, this.head);
    this.head = node;

    if (!this.tail) {
      this.tail = node;
    }
  }

  delete(value: T): void {
    if (!this.head) return;

    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    if (!this.head) {
      this.tail = null;
      return;
    }

    let prev = this.head;
    let cur = this.head.next;

    while (cur) {
      if (cur.value === value) {
        prev.next = cur.next;
        if (cur === this.tail) this.tail = prev;
        cur = prev.next;
      } else {
        prev = cur;
        cur = cur.next;
      }
    }
  }

  find(value: T): LinkedListNode<T> | null {
    let cur = this.head;
    while (cur) {
      if (cur.value === value) return cur;
      cur = cur.next;
    }
    return null;
  }

  toArray(): T[] {
    const result: T[] = [];
    let cur = this.head;
    while (cur) {
      result.push(cur.value);
      cur = cur.next;
    }
    return result;
  }
}

// 테스트
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
console.log(stack.pop());  // 2
console.log(stack.peek()); // 1
console.log(stack.size);   // 1

const queue = new Queue<string>();
queue.enqueue("a");
queue.enqueue("b");
console.log(queue.dequeue()); // "a"
console.log(queue.front());   // "b"

const list = new LinkedList<number>();
list.append(1);
list.append(2);
list.prepend(0);
console.log(list.toArray()); // [0, 1, 2]
list.delete(1);
console.log(list.toArray()); // [0, 2]
