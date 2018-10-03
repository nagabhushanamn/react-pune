"use strict";

/*

how to create function ?

    2 ways

    way-1 : function declaration

            ==> Named function
            ==> function-obj created at scope creation phase
            ==> always get hoist with function-object

    way-2 : function expression

            ==> anonymous function
            ==> function-obj created at scope execution phase
            ==> we can invoke after expression

*/

//----------------------------------------------------
// way-1 : function declaration
//----------------------------------------------------

// console.log(add(12, 13));

// function add(n1, n2) {
//     return n1 + n2;
// }

// console.log(add(12, 13));

//----------------------------------------------------
// way-2 : function expression
//----------------------------------------------------

// console.log(add(12, 13));  // error

// let add = function (n1, n2) {
//     return n1 + n2;
// }

// console.log(add(12, 13));


//----------------------------------------------------
// function params
//----------------------------------------------------

function func(a, b) {
    console.dir(arguments[0]);
    console.dir(arguments[1]);
    console.dir(arguments[2]);
}

// func(1, 2, 3, 4, 5, 6);

//----------------------------------------------------
// function with default params
//----------------------------------------------------
function func1(a = 1, b = 2) {

    // if (!a) {
    //     a = 1
    // }
    // if (!b) {
    //     b = 2;
    // }

    // a = a || 1;
    // b = b || 2;

    console.log(a);
    console.log(b);
}
// func1(undefined, 20);

//----------------------------------------------------
// function with rest param
//----------------------------------------------------

function func2(a, b, ...rest) {
    console.log(a);
    console.log(b);
    console.log(Array.isArray(rest));
    console.log(rest);
}
// func2(1, 2, 3, 4, 5, 6);

//----------------------------------------------------

// Quiz

// can we overload functions by params ? No

function getFood() {
    return "No Food";
}
function getFood(pay) {
    if (arguments.length === 0) return "No Food";
    return "biryani";
}
// console.log(getFood(10));

//----------------------------------------------------

// Ex.

function sum() {
    let len = arguments.length,
        i = 0,
        result = 0;
    while (i < len) {
        result += arguments[i];
        i++;
    }
    return result;
}

//----------------------------------------------------
// Functional Programming Principles
//----------------------------------------------------

/*
- A function can be stored in a variable or value
- A parameter of a function can be a function
- The return value of a function can be a function
*/

//----------------------------------------------------
//A function can be stored in a variable or value
//----------------------------------------------------

function greet() {
    console.log("Hello..")
}

let sayHello = greet;
// sayHello();

//----------------------------------------------------
// - A parameter of a function can be a function
//----------------------------------------------------

function greeting(f) {
    if (f) {
        f(); return;
    }
    console.log('greetings..');
}

// greeting();
let en = function () { console.log('Hello'); }
// greeting(en);

// e.g

let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// nums.sort();

let asc = function (a, b) { return a - b; }
nums.sort(asc);
nums.sort(function (a, b) { return b - a })


//----------------------------------------------------
// - The return value of a function can be a function
//----------------------------------------------------

function teach() {
    console.log('teaching...');
    let learn = function () {
        console.log('learning...');
    };
    //learn();
    console.log('teaching ends');
    return learn;
}

// let learnFunc = teach();
// learnFunc()
// learnFunc();


//----------------------------------------------------
// Function Closure
//----------------------------------------------------

/*
    A closure is a function having access to the parent scope,
    even after the parent function has closed.
*/

function doTeach(sub) {
    console.log('teaching ' + sub);
    let fun = "bla bla bla";
    let notes = sub + "-notes";
    function doLearn() {
        console.log('learning with ' + notes);
    }
    //doLearn();
    console.log('teaching ends..');
    return doLearn;
}



// let doLearnFunc = doTeach('.js');
// doLearnFunc();
// doLearnFunc = null;




// why /where we need closures ?

/*

    use-1 : to abstract public behav to other modules
    use-2 : while executing function async, to access parent-scoped data

*/

// use-1 : to abstract public behav to other modules

/*
// e.g counter module

        - count
        - doCount()
        - getCount()

*/


const counter = (function () {
    let count = 0;  // private
    function doCount() {
        count++;
    }
    function getCount() {
        return count;
    }
    return {
        inc: doCount,
        get: getCount
    };
})()


//----------------------------------------------------
// Function binding ==> invoking functions on object
//----------------------------------------------------

/*

    1- static
    2- dynamic

*/

//----------------------------------------------------
// 1- static function binding
//----------------------------------------------------

function sayName() {
    console.log("im " + this.name);
}

let person = {
    name: 'Nag',
    sayName: sayName
};

person.sayName();

let childPerson = {
    name: 'Ria',
    sayName: function () {
        console.log('im ' + this.name);
    }
};

childPerson.sayName()


// Ques 

let emp = {
    eName: 'IBM',
    sayName: function () {
        let eName = "Local";
        console.log('im ' + eName); // reads scope's hierachy data
        console.log('im ' + emp.eName); // reads referenced object data
        console.log('im ' + this.eName); // reads current scope's owner ( this )
    }
};
emp.sayName();

let oldEmp = emp;
emp = { eName: 'new-ibm' }

oldEmp.sayName();


//----------------------------------------------------
//2- dynamic function binding
//----------------------------------------------------


let tnr = { name: 'Nag' }
let tnr2 = { name: 'Praveen' }

function reactTng(where, when) {
    console.log(this.name + " teaching react in " + where + ":" + when);
}
function scalaTng() {
    console.log(this.name + " teaching scala");
}

// tnr.reactTng = reactTng;  // static
// tnr.reactTng();

// tnr.scalaTng=scalaTng;
// tnr.scalaTng();


// way-1:
// reactTng.call(tnr, "pune", "3rd oct");
// way-2:
// reactTng.apply(tnr2, ['hyd', "nov"])

// way-3:
// let reatTngByNag=reactTng.bind(tnr,"blr",'year');
// reatTngByNag();
// reatTngByNag();
// or
// let reatTngByNag=reactTng.bind(tnr);
// reatTngByNag('pune',"oct");
// reatTngByNag('hyd','nov');




// summary

function func() {
    console.log(this);
}

func();  // this scope not bound to any object
let o1 = { name: 'O1', func: func } // static function binding
let o2 = { name: 'O2' }
func.call(o2);  // dynamic function binding


//-------------------------------------------------------


//  sample-app-1:


function sessionStart() {
    function Employee(name) {
        this.name = name;
    }
    function Trainer(name) {
        this.name = name;
    }
    var doTng = function (sub) {
        console.log(this.name + " teaching " + sub);
        let notes = sub + '-notes';
        let self=this;
        let doLearn = function () {
            console.log(this.name + ' learning with ' + notes + " from "+ self.name);
        }
        console.log('teaching ends');
        return doLearn;
    }
    let e1 = new Employee('A');
    let e2 = new Employee('B');
    let tnr = new Trainer('Nag');
    let tngByNag = doTng.bind(tnr);
    let learn = tngByNag('react');
    learn.call(e1);
    learn.call(e2);
}
sessionStart();