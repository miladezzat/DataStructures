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