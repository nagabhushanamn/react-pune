

// function f1() {
//     console.log('before logic')
//     console.log('f1()');
//     console.log('after logic')
// }

// function f2() {
//     console.log('before logic')
//     console.log('f2()');
//     console.log('after logic')
// }

function f1() {
    console.log('f1()');
}

function f2() {
    console.log('f2()');
}

function wrapper(f) {
    return function () {
        console.log('before logic')
        f();
        console.log('after logic');
    }
}

let newF1=wrapper(f1);
newF1();