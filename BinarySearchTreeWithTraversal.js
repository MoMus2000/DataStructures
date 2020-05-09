class Node{
  constructor(val){
    this.right = null;
    this.left = null;
    this.val = val;
  }
}
class BinarySearchTree{
  constructor(){
    this.root = null;
  }
  insert(val){
    var current = this.root;
    var NewNode = new Node(val);
    if(!this.root){
      this.root = NewNode;
      return this;
    }
    while(true){
      if(val == current.val) return undefined;
      if(val>current.val){
        if(current.right ==null){
          current.right = NewNode;
          return this;
        }
        current = current.right;
      }
      if(val<current.val){
        if(current.left == null){
          current.left = NewNode;
          return this;
        }
        current = current.left;
      }

    }

  }
  find(val){
    var current = this.root;
    var found = false;
    if(this.root == null) return false;
    while(current && !found){
      if(val<current.val){
        current = current.left;
      }
      else if(val>current.val){
        current = current.right;
      }
      else{
        found = true;
      }
    }
      if(!found) return undefined;
      return current.val;
  }
  BFS(){
    var node = null;
    var queue = [];
    var visited = [];
    queue.push(this.root);
    while(queue.length!=0){
      node = queue.shift();
      visited.push(node.val)
      if(node.left){
        queue.push(node.left);
      }
      if(node.right){
        queue.push(node.right);
      }
    }
    return visited;
  }
  DFS(){
    var visited = [];
    var current = this.root;
    function traversal(node){
      //Pre Order Visited.push at top
      //Post Order Visited.push at end before traversal call
      //In Order Visisted.push is in between the conditional statements.

      if(node.left!=null){
        traversal(node.left);
      }
      visited.push(node.val);
      if(node.right!=null){
        traversal(node.right);
      }
    }
    traversal(current)
    return visited;
  }
}



var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.BFS());
