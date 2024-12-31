// Single Linkedlist

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = { value: value, next: null };
    this.tail.next = newNode; // this.tail.next is the same as this.head.next
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = { value: value, next: null };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    let array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array = [...array, currentNode.value];
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    //check params
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = { value: value, next: null };
    const leader = this.traverseNode(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  traverseNode(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    const leader = this.traverseNode(index - 1);
    if (!leader.next) {
      return "Index out of range";
    }
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    // 23,32,45,4,43,5,63,3,65
    //  32 45 23
    let first = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next; //3
      second.next = first; //1
      first = second; //2
      second = temp; 
    }
    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(5);
myLinkedList.append(10);

console.log("rever", myLinkedList)

// Double Linkedlist

class DoubleLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = { value: value, next: null, prev: null };
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = { value: value, next: null, prev: null };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    let array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array = [...array, currentNode.value];
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    //check params
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = { value: value, next: null, prev: null };
    const leader = this.traverseNode(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = holdingPointer;

    holdingPointer.prev = newNode;
    this.length++;
    return this.printList();
  }
  traverseNode(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    const leader = this.traverseNode(index - 1);
    if (!leader.next) {
      return "Index out of range";
    }
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
}

const myDoubleLinkedList = new DoubleLinkedList(5);
myDoubleLinkedList.append(2);
myDoubleLinkedList.append(3);
//myDoubleLinkedList.prepend(5);
//myDoubleLinkedList.prepend(10);
//console.log(myDoubleLinkedList);
//console.log(myDoubleLinkedList.remove(1));
