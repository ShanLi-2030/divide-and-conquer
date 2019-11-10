//Lab3

function divideAndConquerSum(a) {
    var sum = divide(a, 0, a.length - 1);
    return sum;
}

function divide(a, low, hi) {

    if ((hi - low) < 0) {
        return 0;
    }
    else if (hi == low) {
        return a[hi];
    }

    else {

        var length = (hi - low + 1);
        var num1 = Math.floor(length / 3);
        var num2 = 3 - (length % 3);

        
        var mid1 = low + num1 - 1;
        var mid2 = mid1 + num1;
        if (num2 == 1) {
            mid2++;
        }

        return divide(a, low, mid1)
            + divide(a, (mid1 + 1), mid2)
            + divide(a, (mid2 + 1), hi);
    }
}


   var a = Array(Math.floor(Math.random() * 10) + 10)
    for (var i = 0; i < a.length; i++) {
        a[i] = Math.floor(Math.random() * 100);
    }

    console.log(a);

    var sum = divideAndConquerSum(a);
    console.log("Sum:");
    console.log(sum);


/*
2. The recurrence relation of this algorithm is given as:
T(n) = 3*T(n/3) + c [where c is a constant]
Using Subsitution method, we get
T(n) = 3*3 T(n/9) + 3*c + c
= 3*3*3*T(n/27) + 9c + 3c + c
= 3i * T(n/3i) + Θ(1)
For i = log3n, we get
T(n) = log3n + Θ(1) = n
T(n) = Θ(n)
*/
