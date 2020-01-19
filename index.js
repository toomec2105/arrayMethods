/*
push
pop
shift
unshift
slice(bez argumentów)
slice(z argumentami 1 i 2)
splice(z 2 3 argumentami)
find
includes
findIndex
----------------------------
subarray
remove from the end
remove from the front
insert element at an index
insert at the front
  insert at the end
copy
contains
*/

let arr1 = ["red","green","blue","yellow"];
//insert at the end
result = arr1.push("grey"); //returns new array length
console.log(result);
//---------------------------------------

let arr2 = ["red","green","blue","yellow"];
//remove from the end
result = arr2.pop();    //returns removed element
console.log(result);
//---------------------------------------

let arr3 = ["red","green","blue","yellow"];
//remove from the front
result = arr3.shift();  //returns removed element
console.log(result);
//---------------------------------------

let arr4 = ["red","green","blue","yellow"];
//insert at the front
result = arr4.unshift("grey");  //returns new array length
console.log(result);
//---------------------------------------

let arr5 = ["red","green","blue","yellow"];
//subarray
result = arr5.slice(1, 3);  //returns new array with elemnts between given indexes
console.log(result);
//---------------------------------------

let arr6 = ["red","green","blue","yellow"];
//copy
result = arr6.slice();  //from 0 to arr.length by default
console.log(arr6.slice());
//---------------------------------------

let arr7 = ["red","green","blue","yellow"];
// replace or insert
arr7.splice(2, 1, "grey"); 
console.log(arr7);
//---------------------------------------

let arr8 = ["red","green","blue","yellow"];
// find an element
result = arr8.find(element => element === "green");
console.log(result);
//---------------------------------------

let arr9 = ["red","green","blue","yellow"];
//contains
result = arr9.includes("grey"); //returns true/false
console.log(result); 
//---------------------------------------

let arr10 = ["red","green","blue","yellow"];
// get index of an element
result = arr10.findIndex(element => element = "red"); //if not found returns -1
console.log(result);
//---------------------------------------