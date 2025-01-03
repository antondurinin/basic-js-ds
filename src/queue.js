const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  getUnderlyingList() {
    return this.front;
  }

  enqueue(value) {
    const newBackNode = new ListNode(value);

    if (this.back === null) {
      this.front = newBackNode;
      this.back = newBackNode;
      return newBackNode;
    }

    this.back.next = newBackNode;
    this.back = newBackNode;

    return newBackNode;
  }

  dequeue() {
    if (this.front === null && this.back === null) {
      return null;
    }
    let message = this.front.value;
    this.front = this.front.next;

    if (this.front === null) {
      this.back = null;
    }
    return message;
  }
}

module.exports = {
  Queue,
};
