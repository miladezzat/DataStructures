//decration array
var numbers = [];
var newNumbers = new Array();
print('number length: '+ numbers.length);
print('newNumbers length: '+ newNumbers.length)

/********************** */

//accessing and assign 

let assignNumbers = [];

for (let index = 0; index < 100; index++) {
    assignNumbers[index] = index+1;
}

let sum = 0;

for (let index = 0; index < assignNumbers.length; index++) {
    const num = assignNumbers[index];
    sum += num;
}

print('sum: '+  sum);

// create array from string

const string = "Hello everyone my name Milad I am software engineer";

const words = string.split(' ');
print(words[0]);


//aggregate array operations
const arrAssign = [1,2,3,4];
const copyArr = arrAssign;
arrAssign[0] = 100;
print(copyArr[0]) // 100 this is called shallow copy

//deep copy
function copy_Arr(arr) {
    let copied=[];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        copied[index] = element;
    }
    return copied;
};

const arr = [1,2,3];
const copied = copy_Arr(arr);
arr[0]=1000;
print(copied[0]) //1 deep copy