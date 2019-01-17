console.log('hello console!', 7);

var sum = 0;
sum;

var x = 15;

console.log(x);

if(x > 22) {
    console.log('thats a big number!');
}
else {
    console.log('sorry babe thats a tiny little number');
}

// How to do for loops:
// 1. Initialize (where do we start?)
// 2. Condition (for how long)
// 3. Post loop action (as long as what is true?)

function sayHello() {
    console.log('Hello!');
}

// for(var i = 0; i < x; i++) {
//     console.log(i);
//     if(i === 5) {
//         sayHello();
//     }
//     else if(i === 10) {
//         sayHello();
//     }
// }

// eslint-disable-next-line
function evenOrOdd() {
    var input = document.getElementById('number');
    // console.log(input.value);
    var y = input.value;

    if(y % 2 === 0) {
        console.log('Even');
    }
    else {
        console.log('Odd');
    }
}

