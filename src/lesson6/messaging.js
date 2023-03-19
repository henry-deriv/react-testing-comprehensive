const dt = require('./datetime');

function info(message) {
  return `[${dt.nowString()}] INFO: ${message}`;
}

function warn(message) {
  return `[${dt.nowString()}] WARNING: ${message}`;
}

function error(message) {
  return `[${dt.nowString()}] ERROR: ${message}`;
}

module.exports = {
  info,
  warn,
  error
}