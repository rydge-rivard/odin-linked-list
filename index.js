function createLinkedList(name, head) {
  function append(value) {
    if (head === undefined) {
      head = createNode(value);
    } else {
      let temp = head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = createNode(value);
    }
  }

  return { name, head, append };
}

function createNode(value, next) {
  next === undefined ? (next = null) : false;
  value === undefined ? (value = null) : false;

  return { value, next };
}

const head = createNode("1");
const next = createNode("2");

const data = createLinkedList("data", head);

data.append("3");
data.append("3");
data.append("3");

console.log(data);
