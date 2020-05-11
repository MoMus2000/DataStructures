class Node{
  constructor(val,priority){
    this.values = val;
    this.priority=priority;
  }
}
class priorityQueue{
  constructor(array){
    this.values = [];
  }
  insert(val,priority){
      var newNode = new Node(val,priority);
      this.values.push(newNode);
      this.bubbleUp();
  }
  bubbleUp(){
      let idx = this.values.length - 1;
      const element = this.values[idx];
      while(idx > 0){
          let parentIdx = Math.floor((idx - 1)/2);
          let parent = this.values[parentIdx];
          if(element.priority <= parent) break;
          this.values[parentIdx] = element;
          this.values[idx] = parent;
          idx = parentIdx;
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
          if(leftChild.priority>element.priority){
            swap = leftChildIndex;
          }
        }
        if(rightChildIndex<length){
          rightChild = this.values[rightChildIndex];
          if((rightChild.priority>element.priority&&swap===null)||(swap!=null && rightChild.priority>leftChild.priority)){
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

var priority = new priorityQueue;
priority.insert("CommonCold",1);
priority.insert("GunShot Wound", 5);
priority.insert("High Fever", 2);

console.log(priority);
