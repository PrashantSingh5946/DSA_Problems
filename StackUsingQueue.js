//Stack using queues

//Queue

class Stack {
  constructor() {
    this.queue = new this.queue();
  }

  push(elem) {
    this.queue.enqueue(elem);
  }

  pop() {
    let queueLength = this.queue.length;

    for (var i = 0; i < queueLength; i++) {
      if (i == queueLength - 1) {
        return this.queue.dequeue();
      } else {
        this.queue.enqueue(this.queue.dequeue);
      }
    }
  }
}
