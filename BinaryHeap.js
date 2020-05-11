//Coding in the form of an Array

class BinaryHeap{
  constructor(){
    this.values = [];
  }
  insert(value){
    this.values.push(value);
    this.bubbleUp();
  }
  bubbleUp(){
    var flag = true;
    var index = this.values.length-1;
    var element = this.values[index];
    while(flag){
      var parentIndex = Math.floor((index-1)/2);
      var parent = this.values[parentIndex];
      if(parent<element){
        this.values[parentIndex]= element;
        this.values[index]  = parent;
        index = parentIndex;
      }
      else if(parent == element) flag = false;
      else flag = false;
    }
  }
  extractMax(){
    var max = this.values[0];
    var end = this.values.pop();
    this.values[0]=end;
    this.sinkDown();
    return max;
  }
  sinkDown(){
    var index=0;
    var length = this.values.length;
    var element = this.values[0];
    var flag = true;
    while(flag){
      var leftChildIndex = 2*index+1;
      var rightChildIndex = 2*index+2;
      var leftChild, rightChild;
      var swap = null;
      if(leftChildIndex<length){
        leftChild = this.values[leftChildIndex];
        if(leftChild>element){
          swap = leftChildIndex;
        }
      }
      if(rightChildIndex<length){
        rightChild = this.values[rightChildIndex];
        if((rightChild>element&&swap===null)||(swap!=null && rightChild>leftChild)){
          swap = rightChildIndex;
        }
      }
      if(swap == null){
        flag = false;
      }
      this.values[index]= this.values[swap];
      this.values[swap] = element;
      index = swap
    }
  }
}

var heap = new BinaryHeap;
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

console.log(heap);
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
