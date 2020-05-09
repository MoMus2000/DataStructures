function linearSearch(arr,val){

  for(var i =0;i<=arr.length-1;i++){
    if(arr[i] == val){
      return i;
    }
  }
  return -1;
}

function binarySearch(arr,val){
  var start =0;
  var end= arr.length-1;
  var middle = Math.floor((start+end)/2);
  while(arr[middle] !== val && start< end){
    if(val < arr[middle] ){
      end = middle -1;
    }else{
      start = middle+1;
    }
    middle = Math.floor((start+end)/2);
  }
  if(arr[middle]==val) return middle;
  return -1;
}




var array = []
for(var i =2;i<100000000;i++){
  array.push(i);
}

var x = binarySearch(array,1638400000000000000000000000000000000000);
console.log(x);
