class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}
class Stack {
  constructor(){
    this.first = null;
    this.last = null;
    this.size =0 ;
  }
  push(val){
    var NewNode = new Node(val);
    if(this.size===0){
      this.first = NewNode;
      this.last = NewNode;
    }else{
      var oldfirst = this.first;
      this.first = NewNode;
      this.first.next = oldfirst;
    }
    this.size++;
    return this;
  }
  pop(){
    if(this.size === 0) return null;
    var temp = this.first;
    if(this.size===1){
      this.last = null;
    }else{
      this.first = this.first.next;
    }
    this.size--;
    return temp;
  }
}

var stack = new Stack;
var i =0;
while(i<6){
  stack.push("Number "+i);
  i++
}
while(i>0){
  console.log(stack.pop());
  i--
}
