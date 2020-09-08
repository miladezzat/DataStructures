// foreach()

function square(num) {
    print(num, num*num);
}

var nums = [1,2,3,4,5,6,7,8,9,10];
nums.forEach(square);

//every

function isEven(num) {
    return num % 2 === 0;
}

var nums = [2,4,6,8,10];
var even = nums.every(isEven);
if(even){
    print('all numbers are even');
} else{
    print('not all numbers are even');
}