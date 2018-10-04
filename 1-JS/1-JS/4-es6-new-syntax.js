
"use strict"

/*

New-syntax
------------

    - string interpolation
    - OO with class syntax
    - function with default & rest params
    - let & const keywords with block scope

*/


//-------------------------------------------------------
// spread operator
//-------------------------------------------------------

/* function func(a, b) {
    console.log(a);
    console.log(b);
}
let nums = [1, 2];

// way-1:
func(nums[0], nums[1])
// way-2:
func(...nums);


let arr1 = [1, 2, 3];
let arr2 = [7, 8, 9];
let arr3 = [...arr1, 4, 5, 6, ...arr2];
 */



//-------------------------------------------------------
// - obj-literal enhancements  
//-------------------------------------------------------

/* 
let name = "Nag";
let age = 35;

// es5
let person1 = {
    name: name,
    age: age,
    3: 'three',
    address: 'chennai',
    sayName: function () {
        //..
    }
};

//es6
let dynamicField = "home";// home | office | vacation
let person2 = {
    name,
    age,
    [1 + 2]: 'three',
    [dynamicField + "-address"]: '...',
    sayName() {
        //..
    }
};
 */

//-------------------------------------------------------
// de-structuring
//-------------------------------------------------------

// let person = {
//     name: 'Nag',
//     age: 35
// };

// let myName = person.name;
// let myAge = person.age;

// or

// let { name: myName, age: myAge } = person;
// let { name: name, age: age } = person
// or
// let { name, age } = person;

// let name;
// let age;
// ({ name, age } = person);


// let nums = [1, 2, 3, 4, 5, [6, 7]];

// let n1 = nums[0];
// let n2 = nums[1];

// or

// let [n1, n2, n3 = 30, , n5, [n6, n7]] = nums;


//-------------------------------------------------------
// arrow-function
//-------------------------------------------------------

// let getPrice = function () {
//     return 100 + 200;
// }

// or

// let getPrice = () => {
//     return 100 + 200;
// }


// let getPrice = (count) => {
//     return count * (100 + 200);
// }
// or
// let getPrice = count => {
//     return count * (100 + 200);
// }

// let getPrice = (count, tax) => {
//     return count * (100 + 200) + tax;
// }
//or
// let getPrice = (count, tax) => count * (100 + 200) + tax;


// let getPrice = (count, tax) => {
//     let cost = count * (100 + 200);
//     let total = cost + tax;
//     return total;
// }



// why/where we need arrow function ?

// use1: for compact function argumenet

let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]
// nums.sort(function (a, b) { return a - b });
// or
// nums.sort((a, b) => { return a - b });
// or
nums.sort((a, b) => a - b);


// use2 : to capture 'this'

let tnr = {
    name: 'Nag',
    doTeach: function () {
        console.log(this.name + ' teaching .js');
        // let askQues = function (q) {
        //     console.log(this.name + " answering " + q);
        // }
        // or
        let askQues = (q) => {
            console.log(this.name + " answering " + q);
        }
        console.log('teaching ends');
        return askQues;
    }
};

let askQues = tnr.doTeach();
// askQues("Q1");
// askQues.call(tnr, "Q1")
askQues("Q1")

// let newTnr = { name: 'Praveen' }
// askQues.call(newTnr, "Q2")

askQues("Q2");


let regularFunc = function () {
    console.log(this);
}
regularFunc();

let arrowFunc = () => {
    console.log(this);
}
arrowFunc();



// let invoice = {
//     num: 123,
//     process: function () {
//         console.log(`INV-${this.num} processed`);
//     }
// };

// let invoice = {
//     num: 123,
//     process:  ()=> {
//         console.log(`INV-${this.num} processed`);
//     }
// };

// let invoice = {
//     num: 123,
//     process: function () {
//         console.log(`INV-${this.num} processed partially`);
//         return function () {
//             console.log(`INV-${this.num} processed completly`);
//         }
//     }
// };

// let invoice = {
//     num: 123,
//     process: function () {
//         console.log(`INV-${this.num} processed partially`);
//         return () => {
//             console.log(`INV-${this.num} processed completly`);
//         }
//     }
// };

// let complete = invoice.process();
// complete();


//------------------------------------------------------

function Person(name, age) {
    this.name = name;
    this.age = age;

    // ES5
    // let self=this;
    // let incAge = function () {
    //     console.log(this);
    //     self.age++;
    //     console.log(self.name + "->" + self.age);
    // }
    // setInterval(incAge, 1000);

    // Es6
    let incAge = () => {
        console.log(this);
        this.age++;
        console.log(this.name + "->" + this.age);
    }
    setInterval(incAge, 1000);

}

new Person('Ria', 3);
new Person('Nag', 35);





