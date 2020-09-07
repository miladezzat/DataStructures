function factorial(number) {
    let product = 1;

    for (let index = number; index >= 1; --index) {        
        product *= index;        
    }
    return product;
}

print(factorial(4));
print(factorial(5));
print(factorial(10));
print(factorial(0));

function curve(arr, amount) {
    for (var i = 0; i < arr.length; ++i) {
    arr[i] += amount;
    }
    }
    var grades = [77, 73, 74, 81, 90];
    curve(grades, 5);
    print(grades); // displays 82,78,79,86,95