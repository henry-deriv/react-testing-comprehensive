const msg = require('./messaging');

function add(a, b) {
  console.log(msg.info(`In add(${a}, ${b})`));
  return a + b;
}

function subtract(a, b) {
  console.log(msg.info(`In subtract(${a}, ${b})`));
  return a - b;
}

function multiply(a, b) {
  console.log(msg.info(`In multiply(${a}, ${b})`));
  return a * b;
}

function divide(a, b) {
  if(b === 0) {
    console.log(msg.warn(`In divide(${a}, ${b})`));
  } else {
    console.log(msg.info(`In divide(${a}, ${b})`));
    return a / b;
  }
}

function countdown(callback, seconds) {
  setTimeout(() => 
    () => callback(`${seconds} seconds countdown complete`));
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  countdown
}