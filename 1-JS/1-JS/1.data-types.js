

/*


    2 types
    --------
    1. simple / primitives ==> values

        a.  undefined
        b.  string
        c.  number
        d.  boolean
        
    2. complex / reference ==> objects

*/


//-----------------------------------------------------------------
// 1. simple / primitives ==> values
//-----------------------------------------------------------------
// a. undefined

var v;

//-----------------------------------------------------------------

//-----------------------------------------------------------------
// b. string
var name = "Nag";
var selection = 'abc';
// var dynamicString = 'the trainer is ' + name;
// or
var dynamicString = `the trainer is ${name}`  // Es6  ==> string interpolation
var multiLineString = `
    <div>
        <h1>heading</h1>
    </div>
`;

//-----------------------------------------------------------------

//-----------------------------------------------------------------
// 3. number

var count = 12;
var cost = 12.12;

//-----------------------------------------------------------------

// 4. boolean

var found = true;


// imp-note :

/*
    falsy values:
    => false,0,"",null,undefined,NAN
    ref : https://dorey.github.io/JavaScript-Equality-Table/
*/



//-----------------------------------------------------------------
// 2. complex / reference ==> objects
//-----------------------------------------------------------------


/*
    
    how to create object in .js-language ?

    syntax:

    var ref=new Constructor();

    by default , 
    all .js-objects are 'extensible' & 'configurable'

*/

// in ES5

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.sayName = function () {
//     console.log('im ' + this.name);
// }
// Person.prototype.sayAge = function () {
//     console.log('im ' + this.age + " old");
// }

// in ES6 ==> ( New OO syntax with class )

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log('Person::constructor');
    }
    sayName() {
        console.log('im ' + this.name);
    }
    sayAge() {
        console.log('im ' + this.age + " old");
    }
}

//var p1 = new Person('Nag', 35);

class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
        console.log('Employee::constructor');
    }
    saySalary() {
        console.log('i wont');
    }
    askForRaise() {
        return this.salary * 0.02;
    }
}

//var emp = new Employee('Nag', 35, 1000.00)

class Boss extends Employee {
    askForRaise() {
        return this.salary * 0.2 + super.askForRaise();
    }
}

var boss = new Boss('Nag', 35, 1000.00)


class Abc {
    static staMethod() {
        //..
    }
}
Abc.staVar = 12;

//-----------------------------------------------------------------
// Literal style objects
//-----------------------------------------------------------------

// 1. Object

var config = new Object();
config.url = "http://"
config.httpMethod = "GET"
config.onSuccess = function () {
    console.log('im running on success');
}

// or

var newConfig = {
    url: 'http://',
    httpMethod: 'GET',
    onSuccess: function () {
        //..
    }
};

//-----------------------------------------------------------------

// 2. Array / List

var arr = new Array();
arr[0] = "poha";
arr.push('poha');

// or
var newArr = ['item1', 'item2'];

//-----------------------------------------------------------------

// 3. Regular Expression

var re = new RegExp('\\d{10}');

// or

var newRe = /\d{10}/;

//-----------------------------------------------------------------

// 4. Function

var add = new Function("n1", "n2", "var result=n1+n2;return result;")
// or
function newAdd(n1, n2) {
    var result = n1 + n2; return result
}

//------------------------------------------------------------


// How to access obj's properties?

/*

    way-1 : '.' , if property dont have any '-' or 'space' else 
    way-2 : '[]'

*/

var person = {
    'name': 'Nag',
    'home-address': 'chennai',
    100: 'this is hundred'
};

person.name = "Nag N";
person["home-address"] = "pune";
person["100"] = '...'


//------------------------------------------------------------