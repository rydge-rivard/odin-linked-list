function createLinkedList(name, head) {
  function append(value) {
    if (this.head === undefined) {
      this.head = createNode(value);
    } else {
      let temp = this.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = createNode(value);
    }
  }

  function prepend(value) {
    const temp = createNode(value);
    if (this.head !== undefined) {
      temp.next = this.head;
    }
    this.head = temp;
  }

  function size() {
    let temp = this.head;
    let size = 0;
    if (temp !== undefined) {
      size += 1;
      while (temp.next !== null) {
        temp = temp.next;
        size += 1;
      }
    }
    return size;
  }

  function returnHead() {
    return this.head;
  }

  function returnTail() {
    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    return temp;
  }

  function at(index) {
    let temp = this.head;
    j = 0; // start counting list items from 0
    while (index !== j) {
      temp = temp.next;
      j += 1;
    }
    return temp;
  }

  function pop() {
    let temp = this.head;
    let newTail;
    while (temp.next !== null) {
      newTail = temp;
      temp = temp.next;
    }
    newTail.next = null;
  }

  return { name, head, append, prepend, size, returnHead, returnTail, at, pop };
}

function createNode(value, next) {
  next === undefined ? (next = null) : false;
  value === undefined ? (value = null) : false;

  return { value, next };
}

const head = createNode("1");

const data = createLinkedList("data", head);

data.append("2");
data.append("3");

console.log(data);
