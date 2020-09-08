var arr = [2,3,4,5];
print(arr); // print 2,3,4,5
arr.shift(); // pop first number 2 
print(arr); //print 3,5,5
arr.unshift(1,2);
print(arr); // 1,2,3,4,5
arr.pop(); // pop last number5
print(arr);//1,2,3,4

arr.push(5) // add 5 in last element
print(arr) //1,2,3,4,5

//add elements to the middle of array
let index =Math.floor(arr.length / 2)
arr.splice(index, 0, [10,20,30,40]);
print(arr);

//delete elements from the middle
arr = [1,2,10,20,30,40,3,4,5];
index = Math.floor(arr.length / 2)-2;
arr.splice(index, 4);

print(arr);

let notSortedArr = [4,3,7,1,10,155,2];

notSortedArr.sort(function(num1, num2){ return num1 - num2 });
print(notSortedArr);