class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (!this.first || this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;

    this.length--;
  }
}

const queue = new Queue();
queue.enqueue(30);
queue.enqueue(50);
queue.enqueue(60);
queue.dequeue();
queue.peek();


// leetcode problem solve
class MyQueue {
    constructor() {
        this.s1 = [];
        this.s2 = [];
    }

    push(x) {
        while (this.s1.length > 0) {
            this.s2.push(this.s1.pop());
        }
        this.s1.push(x);
        while (this.s2.length > 0) {
            this.s1.push(this.s2.pop());
        }
    }

    pop() {
        return this.s1.pop();
    }

    peek() {
        return this.s1[this.s1.length - 1];
    }

    empty() {
        return this.s1.length === 0;
    }
}

const myQueue = new MyQueue();
console.log(myQueue.peek());
myQueue.push("Joy");
myQueue.push("Matt");
myQueue.push("Pavel");
console.log(myQueue.peek());
console.log("========");
console.log(myQueue.pop());

console.log("========");
console.log(myQueue.peek());

console.log(myQueue);
