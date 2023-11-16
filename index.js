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

  return { name, head, append, prepend };
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
data.append("4");

console.log(data);
