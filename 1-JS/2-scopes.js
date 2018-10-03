"use strict"


/*

    scope / execution-context
    ---------------------------
    
    memory/stack-frame with given arg & local variables
    to execute instructions in seq

    phase-1: creation/push

        ==> any variable declared with 'var' keyword,
            always get hoisted with default value

    phase-2: execution/pop

        ==> instruction will execute in seq.

    --------------------------------------------------------    

    imp-note:

    => by default, every .js-runtime has 1 global-context/scope

    => every function invocation also creates new-scope which is child of
       in which scope that function has declared/created


*/


//---------------------------------------------------------
// console.log(v);
// var v = 12;
//---------------------------------------------------------

// var v = 12;
// function f1() {
//     console.log(v);
//     var v = 13;
// }
// f1(); // f1-scope   <-- global-scope

//---------------------------------------------------------

// Quiz

// var v = 12;
// function f1() {
//     function f2() {
//         console.log(v);
//     }
//     f2();  // f2-scope <---- f1-scope
//     var v = 13;
//     f2();  // f2-scope <---- f1-scope
// }
// f1(); // f1-scope <---- global-scope

//---------------------------------------------------------


// var v = 12;
// var v = 13;

//---------------------------------------------------------

// var v = 100;
// if (true) {
//     var v = 200;
// }
// console.log(v);

//---------------------------------------------------------

/*

    Problems with 'var' keyword

    => always get hoist
    => we can re-declare same variable within scope
    => No block-scope to variables

    soln : using 'let' & 'const' keywords with block-scope  ( in ES6 )

*/



//---------------------------------------------------------

// console.log(v);
// let v = 12;

//---------------------------------------------------------

// var v=12;
// let v=13;

//---------------------------------------------------------

// var v = 100;
// if (true) {
//     let v = 200;
// }
// console.log(v);

//---------------------------------------------------------


const trainer = {
    name: 'Nag'
};

// trainer = null;// Error
trainer.name = "Nag N";

//---------------------------------------------------------

// summary :

// use 'let' for mutable reference
// use 'const' for immutable reference
// avoid 'var' keyword ( deprecated )


//---------------------------------------------------------

//Ques

let person = {
    name: 'Nag',
    age: 35
};

// Object.defineProperty(person, 'name', { writable: false })
// Object.freeze(person)

// person.age = 0; // Error

//---------------------------------------------------------


// Quiz

// function getFood() {
//     return{
//         name: "Biryani"
//     }
// }


// let food = getFood();
// console.log(food.name);

//-----------------------------------------------------------------