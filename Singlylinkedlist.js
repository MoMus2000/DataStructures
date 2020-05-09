class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val){
    var new_node = new Node(val);
    if(!this.head){
      this.head = new_node;
      this.tail = this.head;

    }else{
      this.tail.next = new_node;
      this.tail = new_node;
    }
    this.length++;
    return this;

  }
  traverse(){
    var current = this.head;
    while(current){
      console.log(current.val);
      current = current.next;
    }
    return this;
  }
  pop(){
    if(!this.head){
      return undefined;
    }
    var current = this.head;
    var newTail = current;
    while(current.next){
      newTail=current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length===0){
      this.head = null;
      this.tail = null;

    }
    return this;
  }
  shift(){
    var temp = this.head;
    if(this.length=== 0 ){
    return undefined;
    }
    this.head = this.head.next;
    this.length--;
    return temp;
  }
  unshift(val){
    var node = new Node(val);
    if(!this.head){
      this.head = node;
      this.tail = this.head;
    }
    else{
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }
  get(index){
    if(index<0 || index>=this.length){
      return null;
    }
    var current = this.head;
    for(var i=0;i !==index;i++ ){
      current = current.next;
    }
    return current;
  }
  set(index, val){
    var found = this.get(index);
    if(found){
      found.val = val;
      return true;
    }
    return false;
  }
  insert(index,val){
    if(index<0||index>this.length){
      return false;
    }
    if(index === this.length){
      var x = this.push(val);
      return x;
    }
    if(index === 0){
      var y = this.unshift(val);
      return y;
    }

      var new_node = new Node(val);
      var found = this.get(index-1);
      var temp = found.next;
      found.next = new_node;

      new_node.next = temp;
      this.length++;
      return true;

  }
  remove(index){
    if(index<0||index>=this.length){
      return undefined;
    }
    if(index === this.length-1){
      var x = this.pop();
      return x;
    }
    if(index === 0){
      var y = this.shift();
      return y;
    }
    var previousNode = this.get(index-1);
    var removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }
  print(){
    var arr = [];
    var current = this.head;
    while(current){
      arr.push(current);
      current = current.next;
    }
    console.log(arr);
  }
  reverse(){
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;
    for(var i =0;i<this.length;i++){
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}
var list = new SinglyLinkedList();

for (var i =1 ; i<21; i++){
  list.push(":) "+i)
}
list.traverse();
list.reverse();
list.traverse();
