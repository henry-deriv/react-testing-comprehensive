const rxjs = require('rxjs');

function slowOperation(cb) {
  setTimeout(() => {
    cb(42);
  }, 2000);
}

function slowOperationError(a, b, resultCb, errorCb) {
  setTimeout(() => {
    if (b === 0) {
      errorCb("Cannot divide by 0");
    } else {
      resultCb(a / b);
    }
  }, 2000);
}

function doTask(taskNumber, randomNumber) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (randomNumber < 0.5) {
        resolve(`Task ${taskNumber} resolved`);
      } else {
        reject(`Task ${taskNumber} rejected`);
      }
    }, randomNumber * 5000);
  });
}

let promiseCount = 0;

function handleClick() {
  const thisPromiseCount = ++promiseCount;

  const randomNumber = Math.random();
  displayMessage(
    "info",
    `Task ${thisPromiseCount} about to start with random number ${randomNumber}`
  );

  const promise = doTask(thisPromiseCount, randomNumber);

  promise
    .then((val) => displayMessage("resolved", val))
    .catch((reason) => displayMessage("rejected", reason));
}

function displayMessage(cssClass, message) {
  const messageArea = document.getElementById('messageArea');
  messageArea.insertAdjacentHTML('beforeend', `<div class="${cssClass}">${message}</div>`);
}

function emitSingleValue() {
  return rxjs.of(42);
}

function emitStream1() {
  const arr = [100, 200, 300, 400, 500];
  return rxjs.from(arr);
}

function emitStream2(len) {
  const arr = Array.from(
    {length: len},
    () => Math.floor(Math.random() * 101)
  );
  return rxjs.from(arr);
}

function emitStream3(len) {
  if(len <= 0) {
    return rxjs.throwError(() => new Error('Bad Length'));
  }
}


module.exports = {
  slowOperation,
  slowOperationError,
  doTask,
  emitSingleValue,
  emitStream1,
  emitStream2,
  emitStream3,
};
