console.log('-index.js-');

//------------------------------------------------------------------

// var global = global || {};
// global.mod1.doWork();

//------------------------------------------------------------------

let mod1=require('ibm-pune-greet');
mod1.greet('en');
mod1.greet('es');
mod1.greet();