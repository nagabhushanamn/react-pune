console.log('-index.js-');

//------------------------------------------------------------------

// var global = global || {};
// global.mod1.doWork();

//------------------------------------------------------------------

let mod1 = require('ibm-pune-greet');
mod1.greet('en');
mod1.greet('es');
mod1.greet();

//------------------------------------------------------------------

import './css/index.css';

// import {item1,item2} from './hotel/menu';
// console.log(item1);
// console.log(item2);



// import {item1 as food1,item2 as food2} from './hotel/menu';
// console.log(food1);
// console.log(food2);


// import * as items from './hotel/menu';
// console.log(items.item1);
// console.log(items.item2);


// import {item1} from './hotel/menu';
// item1 = null;// error
// item1.price=300;

// console.log(item1);



import primaryItem, { item1, item2 } from './hotel/menu';
console.log(primaryItem);
console.log(item1)
console.log(item2)


