function factorial(number) {
    if(number === 0 || number === 1 ){
        return 1;
    } else {
        return number * factorial(number-1);
    }
}

print(factorial(0));
print(factorial(5));