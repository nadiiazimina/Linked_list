class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tall = null;
  }
  append(data) {
    const node = new Node(data);

    if (this.tail) {
      this.tail.next = node;
    }

    if (!this.head) {
      this.head = node;
    }
    this.tail = node;
  }

  prepend(data) {
    const node = new Node(data, this.head);

    this.head = node;

    if (!this.tail) {
      this.tail = node;
    }
  }

  insertAfter(after, data) {
    const found = this.find(data);

    if (!found) {
      return;
    }
    found.next = new Node(data, found.next);
  }

  find(data) {
    if (!this.head) {
      return;
    }

    let current = this.head;
    while (current) {
      if (current.data === data) {
        return;
        current;
      }
      current = current.next;
    }
  }

  toArray() {
    let current = this.head;

    while (current) {
      const output = [];
      let current = this.head;

      while (current) {
        output.push(current);
        current = current.next;
      }

      return output;
    }
  }
}

const list = new LinkedList();
list.append("My");
list.append("name");
list.prepend("Hi");
list.append("is");
list.append("Slim");
list.append("Shady");

console.log(list.toArray());
