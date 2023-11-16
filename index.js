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

  function contains(value) {
    let temp = this.head;
    while (temp.next !== null) {
      if (temp.value === value) {
        return true;
      } else {
        temp = temp.next;
      }
    }
    if (temp.value === value) {
      // final if statement to catch the tail node outside of while loop
      return true;
    }
    return false;
  }

  function find(value) {
    let temp = this.head;
    let i = 0;
    while (temp.next !== null) {
      if (temp.value === value) {
        return i;
      } else {
        i += 1;
        temp = temp.next;
      }
    }
    if (temp.value === value) {
      // final if statement to catch the tail node outside of while loop
      return i;
    }
    return (i = undefined);
  }

  function toString(temp = this.head, str = "") {
    if (temp !== null) {
      str += `${temp.value} --> `;
      temp = temp.next;
      return toString(temp, str);
    } else {
      str += "null";
      return str;
    }
  }

  return {
    name,
    head,
    append,
    prepend,
    size,
    returnHead,
    returnTail,
    at,
    pop,
    contains,
    find,
    toString,
  };
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
