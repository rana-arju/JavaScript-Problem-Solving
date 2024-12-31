// Stack implement with linked List

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      newNode.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

const myStack = new Stack();
//myStack.push(20);
//myStack.push(40);
//myStack.push(60);
//myStack.pop();
//console.log(myStack);

class ArrayStack {
  constructor() {
    this.arr = [];
  }
  peek() {
    return this.arr[this.arr.length - 1];
  }
  push(value) {
    this.arr = [...this.arr, value];
    return this;
  }
  pop(){
    if(this.arr.length === 0) return null;
    return this.arr.pop();
  }
}
const myArrayStack = new ArrayStack();
myArrayStack.push(30)
myArrayStack.push(35)
myArrayStack.push(40)
myArrayStack.pop()
console.log(myArrayStack);
