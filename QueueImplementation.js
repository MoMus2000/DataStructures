class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}
class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.size =0;
  }
  enqueue(val){
    var NewNode = new Node(val);
    if(this.size===0){
      this.first = NewNode;
      this.last = NewNode;
    }else{
      this.last.next = NewNode;
      this.last = NewNode;
    }
    this.size++;
    return this.size;
  }
  dequeue(){
    if(this.size===0) return null;
    var oldfirst = this.first;
    if(this.first === this.last){
      this.first = null;
      this.last = null;
    }else{
      this.first = this.first.next;
    }
    this.size--
    return oldfirst;
  }
}

var queue = new Queue;

queue.enqueue(5);
queue.enqueue(7);
queue.enqueue(99);
console.log(queue.enqueue(65));
console.log(queue);
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue);
