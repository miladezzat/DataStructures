//sumation of array
function add(acc, current) {
    return acc+current;
}
const arr = [10,20,30,40,50,60,70,80,90,100];
print(arr.reduce(add));

let sum = 0;
function sumation(num) {
    sum += num;
}
arr.forEach(sumation);
print(sum)