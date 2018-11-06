function sumFibs(num) {
    var counter = 0;
    var a = 0;
    var b = 1;
    var f = 1;
    var sum = 0;
    while (f <= num ) {
        if (f%2 === 1)
        sum += f;
        f = a + b;
        a = b;
        b = f;
        
    }
    return sum;
    }
    sumFibs(4);