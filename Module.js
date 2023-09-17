//here what we did is basically we have separated our concerns
//every file in node.js is a module
const names = require('./ModuleNames');
const sayHi = require('./ModuleUtils');
const items = require('./ModuleAlternative');

require('./Expo_With_expo_statement');//when we import a module , we actually invoke it and all the functions present in the modules will be executed all at once


console.log(items.singlePerson);
console.log(items.items);
console.log(items.items);
sayHi(names.swayam);
sayHi(names.dash);
sayHi("susan");



// CommonJS , every file in node is module (by default)
//Modules - Encapsulated Code (only share minimum)

// console.log(names);