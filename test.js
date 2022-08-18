/*************Test******************/
var test = require('unit.js');
var str = 1;

test.string(str).startsWith('Hello');

if (test.string(str).startsWith('Hello')) {
  console.log('Passed');
}
/***********************************/