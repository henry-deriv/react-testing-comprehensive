function f1() {
  // do something
}

function f2(a, b, c) {
  // do something
}

function f3() {
  return 42;
}

function add(a, b) {
  return a + b;
}

function processArr(arr, op) {
  for (var val of arr) {
    op(val);
  }
}

function incrementLikes() {
  if (isLocalStorageSupported()) {
    let likes = getNumber("likes", 0);
    likes++;
    saveNumber("likes", likes);
  }
}

function isLocalStorageSupported() {
  return typeof Storage !== void 0;
}

function getNumber(propertyName, defaultValue) {
  let value = Number(window.localStorage[propertyName]);
  if (isNaN(value)) {
    return defaultValue;
  } else {
    return value;
  }
}

function saveNumber(propertyName, value) {
  window.localStorage[propertyName] = value;
}

module.exports = {
  f1,
  f2,
  f3,
  add,
  processArr,
  isLocalStorageSupported,
  getNumber,
  saveNumber,
  incrementLikes,
};
